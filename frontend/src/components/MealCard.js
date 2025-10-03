import React from 'react';

export default function MealCard({ meal }) {
  return (
    <div className="card p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-1">{meal.title}</h6>
          <div className="small text-muted">{meal.diets.join(' • ')} • {meal.time_minutes} min</div>
          <p className="mt-2 mb-1">{meal.notes}</p>
          <div className="small"><strong>Ingredients:</strong> {meal.ingredients.join(', ')}</div>
        </div>
        <div className="text-end">
          <span className="badge bg-secondary mb-2">{meal.budget}</span>
          <div className="small">Serves: {meal.servings}</div>
        </div>
      </div>
    </div>
  );
}
