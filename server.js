const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.j App!');
});

app.listen(PORT, () => {
  console.log(`Server is runnin on http://localhost:${PORT}`);
});