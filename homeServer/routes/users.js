const router = require('koa-router')();

const mysql = require('../middlewares/mysqlComm');

router.prefix('/users');

router.get('/resume', async (ctx, next) => {
  let sql = 'select * from xlz_test.user_detail;';
  let params = '';
  const Row = await new mysql().row(sql, params);
  ctx.body = {
    code: 0, msg: 'success', data: Row
  };
});

module.exports = router;
