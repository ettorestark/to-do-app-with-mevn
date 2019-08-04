const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connection to databse
mongoose.connect('mongodb://localhost/app', { useNewUrlParser: true })
	.then(response => console.log('Database connected'))
	.catch(err => console.log(err));

//Settings
app.set('port', 8081 || process.env.PORT);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/tasks', require('./routes/tasks'));

//Server in listening
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});

