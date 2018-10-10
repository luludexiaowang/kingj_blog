/**
 * 路由入口文件
 */
const router = require('koa-router')();

//首页路由
const home = require('./home');
//菜单路由
const menu = require('./menu');
//菜单路由
const users = require('./users');

module.exports =(app)=>{
  app.use(home.routes(), home.allowedMethods());
  app.use(menu.routes(), menu.allowedMethods());
  app.use(users.routes(), menu.allowedMethods());
};
