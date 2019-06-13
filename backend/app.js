require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const passport = require('./helpers/passport');
const cors = require('cors');
//const { isLogged, checkRole } = require('./helpers/middlewares');

require('./db');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(
	session({
		secret: process.env.SECRET,
		saveUninitialized: true,
		resave: true,
		cookie: { maxAge: 100 * 60 * 60 * 24 }
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		credentials: true,
		origin: [ 'http://localhost:3000', 'http://localhost:3001', process.env.prodURL ]
	})
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
	require('node-sass-middleware')({
		src: path.join(__dirname, 'public'),
		dest: path.join(__dirname, 'public'),
		sourceMap: true
	})
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Star';

const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/auth/', auth);
app.use('/a/auth', require('./routes/ADMIN/auth'));
app.use('/POS/article', require('./routes/POS/articles'));
app.use('/articles/categories', require('./routes/Articles/categories'));
app.use('/articles/tax', require('./routes/Articles/taxes'));
app.use('/articles/unit', require('./routes/Articles/unit'));
app.use('/c', require('./routes/ADMIN/company'));
app.use('/s', require('./routes/ADMIN/store'));
app.use('/', index);

module.exports = app;
