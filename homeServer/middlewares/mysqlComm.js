/**
 * 数据库查询公共组件
 */

const mysql  = require( 'mysql' );
const pool = require('../lib/mysql').mysqlService;
const Base = require('./base');

class MysqlComm extends Base{
  constructor(){
    super();
  }
  //将结果已对象数组返回
  row(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params, function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve(res);
        });
      });
    });
  }

  //返回一个对象
  first(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params, function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve(res[0] || null);
        });
      });
    });
  }

  //返回单个查询结果
  single(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query( sql, params, function(error, res){
          connection.release();
          if(error){
            reject( error );
            return;
          }
          for( let i in res[0] )
          {
            resolve( res[0][i] || null );
            return;
          }
          resolve(null);
        });
      });
    });
  }

  //执行代码，返回执行结果
  execute(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params, function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve( res );
        });
      });
    });
  }
}

//模块导出
module.exports = MysqlComm;

