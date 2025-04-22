const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');
const db = require('./config/db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Transaction Routes
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
