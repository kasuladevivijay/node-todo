const express = require('express'),
bodyParser = require('body-parser'),
todoController = require('./controllers/todoController.js'),

app = express();

// set the template engine
app.set('view engine', 'ejs');

// use static files
app.use(express.static('./public'));

// controller
todoController(app);

app.listen(3000);
console.log('server up and running on port 3000');
