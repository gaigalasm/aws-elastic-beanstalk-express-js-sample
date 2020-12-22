const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello we want to build something! and we did it again baby'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
