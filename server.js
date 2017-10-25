const express = require('express');

var app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

app.get('/', (req, res) => {
	//won't display as express returns index.html
	res.send('Hi there from your app');
});

app.get('/about', (req, res) => {
	res.send('This is where you can find out about things');
});
//this line doesnt show
console.log("hi there from your server!");