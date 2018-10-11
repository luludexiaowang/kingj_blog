/**
 * mysql 测试文件
 */

const mysql = require('mysql');
const config = require('../config/config').getInstance().config;

const mysqlService = mysql.createPool({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password
  // debuge: true,                    //调试模式
  // database: config.mysql.database
  // connectionLimit : 50,
  // multipleStatements : true        //是否允许执行多条sql语句
});

//尝试连接是否成功
mysqlService.getConnection(function (err, connection) {
  if (err) {
    console.log('connect mysql err');
    console.log(err);
    return;
  }
  console.log('connect mysql ok.');
  connection.release();
});

module.exports = {
  mysqlService: mysqlService
};
