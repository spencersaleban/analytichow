const logger = require('koa-logger');
const Koa = require('koa');
const parser = require('koa-bodyparser');
const router = require('./router/db.js');

const app = new Koa();

app.use(logger());
app.use(parser());
app.use(router.routes());

app.listen(3002);
