import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [budget, setBudget] = useState('');
  const [diet, setDiet] = useState('');
  const [ingredients, setIngredients] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const params = {};
    if (budget) params.budget = budget;
    if (diet) params.diet = diet;
    if (ingredients) params.ingredients = ingredients;
    onSearch(params);
  };

  const clear = () => {
    setBudget(''); setDiet(''); setIngredients('');
    onSearch({});
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-2">
        <label className="form-label">Budget</label>
        <select className="form-select" value={budget} onChange={e=>setBudget(e.target.value)}>
          <option value="">Any</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Diet</label>
        <select className="form-select" value={diet} onChange={e=>setDiet(e.target.value)}>
          <option value="">Any</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="keto">Keto</option>
          <option value="balanced">Balanced</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Ingredients (comma separated)</label>
        <input className="form-control" placeholder="e.g. egg, tomato, rice" value={ingredients} onChange={e=>setIngredients(e.target.value)} />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" type="submit">Search</button>
        <button className="btn btn-outline-secondary" type="button" onClick={clear}>Clear</button>
      </div>
    </form>
  );
}
