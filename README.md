# Meal Planner (React + Node.js)

A simple Meal Planner web app that suggests meal prep ideas based on:
 - budget (low / medium / high)
 - diet (vegetarian, vegan, keto, balanced)
 - available ingredients (comma-separated)

## Structure
- `backend/` — Node.js + Express API serving meal suggestions
- `frontend/` — React app (Create React App style) that consumes the API

## Quick start (local)
1. Start backend
   - cd backend
   - npm install
   - npm start
   - Backend runs at http://localhost:5000
2. Start frontend
   - cd frontend
   - npm install
   - npm start
   - Frontend runs at http://localhost:3000

## Notes
- This project uses a local JSON dataset for meal templates (no external APIs).
- You can extend the dataset in `backend/data/meals.json`.
- To deploy: host backend on Render/Railway and frontend on Vercel/Netlify. Update API base URL in `frontend/src/api.js`.
