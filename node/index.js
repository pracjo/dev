const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like CSS) from the "public" folder
app.use(express.static('public'));

// Home route to show the form
app.get('/', (req, res) => {
  res.send(`
    <h2>Add Two Numbers</h2>
    <form action="/add" method="get">
      <input type="number" name="num1" placeholder="Enter first number" required />
      <input type="number" name="num2" placeholder="Enter second number" required />
      <button type="submit">Add</button>
    </form>
  `);
});

// Addition route
app.get('/add', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;
  res.send(`
    <h2>Result</h2>
    <p>${num1} + ${num2} = ${sum}</p>
    <a href="/">Go back</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
