const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
   // Check user credentials and log them in
});

app.post('/signin', (req, res) => {
   // Create a new user account
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
