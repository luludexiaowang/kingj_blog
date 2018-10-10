/**
 * 登陆状态校验中间件
 */

const ResCommon = require('../middlewares/resCommon');

class Auth {
  constructor(resCommon){

  }

  async checkCooie(ctx, next){
    const resCommon = new ResCommon();
    if(ctx.cookies.get('username')){
      ctx.body = 'welcome' + ctx.cookies.get('username');
    }else{
      let resData = await resCommon.dealRes(2000, []).then((data)=>{
        return data;
      }).catch((err)=>{
        console.log(err);
      });
      ctx.body = {
        resData
      };
    }
  }
}

module.exports = Auth;
