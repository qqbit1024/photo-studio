require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const redisClient = redis.createClient();

const app = express();

// Import partials hbs
hbs.registerPartials(path.join(process.env.PWD, 'src/views/partials'));

// view engine setup
app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.set('view engine', 'hbs');

// session middlware
app.use(
  session({
    name: 'sid',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
  }),
);

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'src', 'public')));

// custom middleware
const { authorizate } = require('./src/middlewares/authMiddleware');

app.use(authorizate);

// routers import
const indexRouter = require('./src/routes/indexRouter');
const productsRouter = require('./src/routes/productsRouter');
const ordersRouter = require('./src/routes/ordersRouter');
const adminRouter = require('./src/routes/adminRouter');

// routes
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT, () => {
  console.log(`server started PORT: ${process.env.PORT}`);
});
