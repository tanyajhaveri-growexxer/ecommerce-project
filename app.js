const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Welcome to the App');
});
module.exports = app;
app.get('/api/users', (req, res) => {
res.json({ users: [] });
});