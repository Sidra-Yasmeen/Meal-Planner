import React from 'react';

export default function MealCard({ meal }) {
  // Map budget values to appropriate colors
  const getBudgetColor = (budget) => {
    switch(budget.toLowerCase()) {
      case 'low': return 'bg-success';
      case 'medium': return 'bg-warning';
      case 'high': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <div className="meal-title">
          <h5>{meal.title}</h5>
          <div className="meal-meta">
            <span className="diet-tags">{meal.diets.join(' • ')}</span>
            <span className="time">⏱️ {meal.time_minutes} min</span>
          </div>
        </div>
        <div className="meal-badges">
          <span className={`badge ${getBudgetColor(meal.budget)}`}>
            {meal.budget} budget
          </span>
          <div className="servings">👥 Serves {meal.servings}</div>
        </div>
      </div>
      
      <div className="meal-body">
        <p className="meal-description">{meal.notes}</p>
        
        <div className="ingredients-section">
          <h6>Ingredients</h6>
          <div className="ingredients-list">
            {meal.ingredients.map((ingredient, index) => (
              <span key={index} className="ingredient-tag">
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="meal-footer">
        <button className="btn btn-outline-primary btn-sm">
          View Recipe
        </button>
        <button className="btn btn-outline-secondary btn-sm">
          Save
        </button>
      </div>
    </div>
  );
}