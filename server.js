const express = require('express');

var app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hi there from your app');
});


console.log("hi there, how are you doing?");