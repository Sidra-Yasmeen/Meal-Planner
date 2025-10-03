const express = require('express');
const cors = require('cors');
const mealsRouter = require('./routes/meals');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/meals', mealsRouter);

app.get('/', (req, res) => res.send({status: 'Meal Planner API'}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
