const db = require('../config/db');

const getTasks = (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const createTask = (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task created' });
  });
};

module.exports = { getTasks, createTask };
