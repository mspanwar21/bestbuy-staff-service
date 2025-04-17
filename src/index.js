const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let staff = [];

// Create
app.post('/staff', (req, res) => {
  const newStaff = { id: Date.now(), ...req.body };
  staff.push(newStaff);
  res.status(201).json(newStaff);
});

// Read All
app.get('/staff', (req, res) => res.json(staff));

// Read One
app.get('/staff/:id', (req, res) => {
  const s = staff.find(p => p.id == req.params.id);
  s ? res.json(s) : res.status(404).send('Not Found');
});

// Update
app.put('/staff/:id', (req, res) => {
  const idx = staff.findIndex(p => p.id == req.params.id);
  if (idx > -1) {
    staff[idx] = { ...staff[idx], ...req.body };
    res.json(staff[idx]);
  } else res.status(404).send('Not Found');
});

// Delete
app.delete('/staff/:id', (req, res) => {
  staff = staff.filter(p => p.id != req.params.id);
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Staff-Service running on port ${PORT}`));
