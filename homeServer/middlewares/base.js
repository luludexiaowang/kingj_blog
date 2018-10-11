/**
 * 公共函数 基础类
 */

const SystemField = require('./systemField');

class baseMiddlewares {

  constructor(){
    this.systemField = SystemField;
  }

}

module.exports = baseMiddlewares;
