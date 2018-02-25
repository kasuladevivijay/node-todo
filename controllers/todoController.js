const bodyParser = require('body-parser'),
mongoose = require('mongoose');

// ES6 promises
mongoose.Promise = global.Promise;

// Connect to a db
mongoose.connect('mongodb://localhost/todos');

// Create a Schema
const todoSchema = new mongoose.Schema({
	item: String
});

// Model or Collection
const Todo = mongoose.model('Todo', todoSchema);


const urlEncodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

app.get('/todo', (req, res)=>{
	// get data from db
	Todo.find({}, (err,data)=>{
		if (err) throw err;
		console.log('inside get');
		res.render('todo', {todos: data});
	});
});

app.post('/todo', urlEncodedParser, (req, res)=>{
// get the data from the view and add it to db
	let newTodo = Todo(req.body).save((err, data)=>{
		if (err) throw err;
		console.log('inside post', data);
		res.json(data);
	});
});

app.delete('/todo/:item', (req, res)=>{
// delete the selected item
Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data)=>{
	if (err) throw err;
	res.json(data);
});
});
};