const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));


// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.use(express.json());

app.post('/submit', (req, res) => {
  const data = req.body;
  res.send (`Received: ${JSON.stringify(data)}`);
})

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use((req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

