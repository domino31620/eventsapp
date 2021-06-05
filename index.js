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

app.use(
	express.urlencoded({
		extended: true,
	})
);

setup;
app.use('/', indexRouter);
app.use('./events', eventsRouter);
app.use('/signup', authRouter);
app.use('/login', authRouter);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
