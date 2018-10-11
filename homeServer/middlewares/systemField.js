/**
 * 系统字段
 */

const stautsCode = [
  {title: 'SUCCESS', code: 1000, msg: '查询成功'},
  {title: 'NODATA', code: 1001, msg: '查询成功无记录'},
  {title: 'FEAILED', code: 1004, msg: '查询失败'},
  {title: 'ACCOUNT_ERROR', code: 2000, msg: '账户不存在或被禁用'},
  {title: 'API_NOT_EXISTS', code: 2001, msg: '请求的接口不存在'},
  {title: 'API_NOT_PER', code: 2002, msg: '没有该接口的访问权限'},
  {title: 'PARAMS_ERROR', code: 2004, msg: '参数为空或格式错误'},
  {title: 'SIGN_ERROR', code: 2005, msg: '数据签名错误'},
  {title: 'AMOUNT_NOT_QUERY', code: 2010, msg: '余额不够，无法进行查询'},
  {title: 'API_DISABLE', code: 2011, msg: '查询权限已被限制'},
  {title: 'UNKNOWN_IP', code: 2099, msg: '非法IP请求'},
  {title: 'SYSTEM_ERROR', code: 9999, msg: '系统异常'}
];

module.exports = {
  stautsCode: stautsCode
};
