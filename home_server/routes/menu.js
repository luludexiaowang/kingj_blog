/**
 * 菜单接口路由
 */
const router = require('koa-router')();
const mysql = require('../middlewares/mysqlComm');

router.prefix('/menu');

//顶部导航接口
router.get('/toplist', async (ctx, next) => {
  let sql = 'select * from xlz_test.menu_toplist;';
  let params = '';
  const Row = await new mysql().row(sql, params);
  console.log(Row);
  ctx.body = {
    code: 0, msg: 'success', data: Row
  };
});

module.exports = router;
