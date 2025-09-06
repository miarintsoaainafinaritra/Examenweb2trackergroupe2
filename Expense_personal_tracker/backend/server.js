const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/auth'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/incomes', require('./routes/incomes'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend PostgreSQL sur http://localhost:${PORT}`);
});