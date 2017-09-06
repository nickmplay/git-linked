const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hi there from your app');
});

app.get('/about', (req, res) => {
	res.send('This is where you can find out about things');
});

console.log("hi there from your server!");