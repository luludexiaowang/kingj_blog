/**
 * 返回数据处理
 */

const Base = require('./base');

class ResCommon extends Base{

  constructor(){
    super();
  }

  // 拼接返回参数
  /**
   * @param
   * code Number
   * data Any
   */

  async dealRes(code, data){
    return new Promise((resolve, reject)=>{
      if(typeof(code)!== 'number'){
        return reject('code 类型必须为Number');
      }
      let self = this;
      let resData = new Map();
      self.systemField.stautsCode.map((v, k, arr)=>{
        if(code===v.code){
          resData.set({code: code, msg: v.msg, 'data': data});
        }
      });
      return resolve([...resData][0][0]);
    });
  }
}

module.exports = ResCommon;
