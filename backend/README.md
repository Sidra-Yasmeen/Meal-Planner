# Backend - Meal Planner API

## Endpoints
- GET /api/meals
  - Query params:
    - budget: low|medium|high
    - diet: vegan|vegetarian|keto|balanced
    - ingredients: comma-separated list (e.g. `egg,tomato`)

Example:
`GET /api/meals?budget=low&diet=vegan&ingredients=rice,garlic`
