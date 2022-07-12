require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const { checkSession } = require('./middlewares/middleware');

const userRouter = require('./routes/userRouter');
const infoRouter = require('./routes/infoRouter');
const progressRouter = require('./routes/progressRouter');
const timeprogressRouter = require('./routes/timeprogressRouter');
const gameRouter = require('./routes/gameRouter');

const PORT = process.env.PORT ?? 3003;

const app = express();

hbs.registerPartials(path.join(process.env.PWD, '/views/partials'));
app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(session({
  name: 'sid',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  saveUninitialized: false,
}));

app.use(checkSession);

app.use('/auth', userRouter); // проверка авторизации, регистрация, авторизация, разлогинивание
app.use('/info', infoRouter); // выдает данные для страницы с информацией о мусоре
app.use('/progress', progressRouter);
app.use('/timeprogress', timeprogressRouter);
app.use('/game', gameRouter);

app.listen(PORT, () => {
  console.log('server start on ', PORT, '...');
});
