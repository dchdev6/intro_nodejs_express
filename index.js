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

const items = ['Apple','Banana','Orange'];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});