const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'assets')));

app.use('/assets/css', express.static(path.join(__dirname, 'assets/css'), { 'extensions': ['css'] }));

app.use('/assets/js', express.static(path.join(__dirname, 'assets/js'), { 'extensions': ['js'] }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});