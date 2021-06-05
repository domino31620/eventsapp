const express = require('express');
const morgan = require('morgan');
const app = express();

const eventsRouter = require('./src/routes/eventsRouter');
const indexRouter = require('./src/routes/indexRouter');
const authRouter = require('./src/routes/authRouter');
const setup = require('./src/database/setup');

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

<<<<<<< HEAD
app.use(express.urlencoded({
  extended: true
}));

// DATABASE
const dbSetup = require('./src/database/db');

dbSetup;
=======
app.use(
	express.urlencoded({
		extended: true,
	})
);
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57

setup;
app.use('/', indexRouter);
app.use('./events', eventsRouter);
app.use('/signup', authRouter);
app.use('/login', authRouter);

<<<<<<< HEAD
app.post("/signup", async (req, res) => {
  let newUser = new User({
    name: req.body.name,
    password: req.body.password
  });

})

//Server
=======
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
