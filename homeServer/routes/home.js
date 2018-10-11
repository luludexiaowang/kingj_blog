/**
 * 首页接口路由
 */

const router = require('koa-router')();
const mysql = require('../middlewares/mysqlComm');

router.get('/', async (ctx, next) => {
  let sql = 'select * from xlz_test.user_register;';
  let params = '';
  const Row = await new mysql().row(sql, params);
  ctx.body = {
    code: 0, msg: 'success', data: Row
  };
});

module.exports = router;
