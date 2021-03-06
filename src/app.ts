import api from './api/index'
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import express from 'express';
import indexRouter from './routes/index';
import logger from 'morgan';
import path from 'path';

const app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');

if (process.env.MODE === 'DEVELOP') {
	app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export { app };
