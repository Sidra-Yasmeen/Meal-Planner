import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import MealCard from './components/MealCard';
import API from './api';

export default function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async (params) => {
    setLoading(true);
    setError('');
    try {
      const res = await API.get('/meals', { params });
      setMeals(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch meals');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <style jsx>{`
        :root {
          --marian-blue: #3d3b8eff;
          --glaucous: #6883baff;
          --seasalt: #f9f9f9ff;
          --thulian-pink: #e072a4ff;
          --celadon: #b0e298ff;
        }
        
        .app-container {
          background-color: var(--seasalt);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .navbar {
          background: linear-gradient(135deg, var(--marian-blue), var(--glaucous));
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 1.2rem 0;
        }
        
        .navbar-brand {
          color: white !important;
          font-weight: 700;
          font-size: 1.8rem;
          letter-spacing: -0.5px;
        }
        
        .navbar-text {
          color: rgba(255,255,255,0.85) !important;
          font-size: 0.95rem;
        }
        
        .search-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        
        .search-card:hover {
          transform: translateY(-3px);
        }
        
        .tips-card {
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(176,226,152,0.15), rgba(104,131,186,0.1));
          border-left: 4px solid var(--celadon);
        }
        
        .results-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }
        
        .section-title {
          color: var(--marian-blue);
          font-weight: 600;
          margin-bottom: 1.2rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--thulian-pink);
          border-radius: 2px;
        }
        
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .loading-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(61,59,142,0.2);
          border-radius: 50%;
          border-top-color: var(--marian-blue);
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-message {
          background-color: rgba(224,114,164,0.1);
          border-left: 4px solid var(--thulian-pink);
          color: #721c24;
        }
        
        .empty-state {
          color: var(--glaucous);
          text-align: center;
          padding: 2rem 0;
        }
        
        .tips-list {
          padding-left: 1.2rem;
        }
        
        .tips-list li {
          margin-bottom: 0.6rem;
          position: relative;
          padding-left: 0.5rem;
        }
        
        .tips-list li:before {
          content: '•';
          color: var(--celadon);
          font-weight: bold;
          position: absolute;
          left: -1rem;
        }
        
        footer {
          background: linear-gradient(135deg, var(--marian-blue), var(--glaucous));
          color: white;
          padding: 1.5rem 0;
          margin-top: 2rem;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand">🍽️ Meal Planner</span>
          <span className="navbar-text">Suggests meal prep ideas for your budget & ingredients</span>
        </div>
      </nav>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card search-card p-4">
              <h5 className="section-title">Find Meals</h5>
              <SearchForm onSearch={search} />
            </div>
            
            <div className="card tips-card p-4 mt-4">
              <h6 className="section-title">Tips</h6>
              <ul className="tips-list">
                <li>Provide ingredients you already have for best matches</li>
                <li>Use budget filter to find cheaper or premium recipes</li>
                <li>Mix and match recipes for meal prep</li>
                <li>Save favorites to build your personal meal collection</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card results-card p-4">
              <h5 className="section-title">Suggested Meals</h5>
              
              {loading && (
                <div className="d-flex align-items-center justify-content-center py-4">
                  <div className="loading-spinner mr-2"></div>
                  <span>Finding delicious meals...</span>
                </div>
              )}
              
              {error && (
                <div className="alert error-message py-3">
                  {error}
                </div>
              )}
              
              {meals.length === 0 && !loading && (
                <div className="empty-state">
                  <p>No meals yet. Use the form to search for recipes.</p>
                </div>
              )}
              
              {meals.length > 0 && (
                <div className="card-grid mt-3">
                  {meals.map(meal => (
                    <MealCard key={meal.id} meal={meal} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <div className="container">
          <small>© {new Date().getFullYear()} Meal Planner. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}