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
    setBudget(''); 
    setDiet(''); 
    setIngredients('');
    onSearch({});
  };

  return (
    <div className="search-form-container">
      <form onSubmit={submit}>
        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">💰</span> Budget
          </label>
          <select 
            className="form-select" 
            value={budget} 
            onChange={e => setBudget(e.target.value)}
          >
            <option value="">Any Budget</option>
            <option value="low">Low Budget</option>
            <option value="medium">Medium Budget</option>
            <option value="high">High Budget</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">🥗</span> Diet Type
          </label>
          <select 
            className="form-select" 
            value={diet} 
            onChange={e => setDiet(e.target.value)}
          >
            <option value="">Any Diet</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="balanced">Balanced</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">🥘</span> Ingredients
          </label>
          <input 
            className="form-control" 
            placeholder="e.g. egg, tomato, rice" 
            value={ingredients} 
            onChange={e => setIngredients(e.target.value)}
          />
          <small className="form-text text-muted">Separate ingredients with commas</small>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">
            <span className="btn-icon">🔍</span> Search Meals
          </button>
          <button className="btn btn-outline-secondary" type="button" onClick={clear}>
            <span className="btn-icon">↺</span> Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
}