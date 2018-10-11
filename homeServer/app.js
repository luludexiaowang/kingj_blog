const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const staticServer = require('koa-static');
const path = require('path');

// 数据库
const mysql = require('./lib/mysql');

// 路由
const router = require('./routes/index');

// 校验
// const auth = require('./lib/auth');
// const checkAuth = new auth();
// app.use(checkAuth.checkCooie);

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());

// html 模板
app.use(staticServer(path.join(__dirname, 'public')));
// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
router(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
