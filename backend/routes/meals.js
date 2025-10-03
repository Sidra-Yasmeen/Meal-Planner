const express = require('express');
const router = express.Router();
const meals = require('../data/meals.json');

function hasIngredients(recipeIngredients, provided) {
  const providedSet = new Set(provided.map(i => i.trim().toLowerCase()).filter(Boolean));
  if (providedSet.size === 0) return true;
  const recipeSet = new Set(recipeIngredients.map(i => i.toLowerCase()));
  for (let ing of providedSet) {
    let found = false;
    for (let r of recipeSet) {
      if (r.includes(ing) || ing.includes(r) ) { found = true; break; }
    }
    if (!found) return false;
  }
  return true;
}

router.get('/', (req, res) => {
  try {
    const { budget, diet, ingredients } = req.query;
    const provided = ingredients ? ingredients.split(',').map(s=>s.trim()).filter(Boolean) : [];
    let results = meals;
    if (budget) {
      results = results.filter(m => m.budget === budget.toLowerCase());
    }
    if (diet) {
      results = results.filter(m => m.diets.map(d=>d.toLowerCase()).includes(diet.toLowerCase()));
    }
    if (provided.length > 0) {
      results = results.filter(m => hasIngredients(m.ingredients, provided));
    }
    if (provided.length > 0) {
      results = results.map(m => {
        const matchCount = m.ingredients.reduce((acc, ing) => {
          for (let p of provided) {
            if (ing.toLowerCase().includes(p.toLowerCase()) || p.toLowerCase().includes(ing.toLowerCase())) return acc+1;
          }
          return acc;
        }, 0);
        return {...m, matchCount};
      }).sort((a,b) => b.matchCount - a.matchCount);
    }
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Server error'});
  }
});

module.exports = router;
