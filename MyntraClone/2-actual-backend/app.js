const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items');

const app = express();

app.use(bodyParser.json());

const allowedOrigin = "https://cautious-journey-wgxwgjggggjh66v-5173.app.github.dev";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});