import request from '@/http/request'
import digest from './digest';




function commonRequest(config){
  let token = localStorage.getItem('token');
  let randomKey = localStorage.getItem('randomKey');
  let header = config.noToken ? {} : {'Authorization':'Bearer ' + token}

  return request({
    url: config.url,
    method: config.method ? config.method : 'post',
    data: config.noDigest ?  config.data : digest(randomKey,config.data),
    headers: header
  })
}

// 登录部分
export function sendMsgCode(params){
  return commonRequest({
    url: '/sendMsgCode',
    data: params,
    noDigest: true,
    noToken: true,
  })
}
export function moblieLogin(params){
  return commonRequest({
    url: '/moblieLogin',
    data: params,
    noDigest: true,
    noToken: true,
  })
}
export function weiXinRegister(params){
  return commonRequest({
    url: '/weiXinRegister',
    data: params,
    noDigest: true,
    noToken: true,
  })
}
export function findWeiXinInfo(params){
  return commonRequest({
    url: '/findWeiXinInfo',
    data: params,
    noDigest: true,
    noToken: true,
  })
}
export function findUserinfo(params){
  return commonRequest({
    url: '/findUserinfo',
    data: params,
    noDigest: true,
    noToken: true,
  })
}
export function snsapiUserinfo(params){
  return commonRequest({
    url: '/snsapiUserinfo',
    data: params,
    noDigest: true,
    noToken: true,
  })
}


// home部分
export function getTemplate(params){
  return commonRequest({
    url: '/startPage/getTemplate',
    data: params,
  })
}
export function findActivityList(params){
  return commonRequest({
    url: '/activityPoint/findActivityList',
    data: params,
  })
}


//
// module.exports = {
//
//   moblieLogin: 'moblieLogin',//登录
//   weiXinAppRegister: 'weiXinAppRegister',//微信小程序登录
//   sendMsgCode: 'sendMsgCode',//发送验证码
//
//
//   queryMemberStatusVIPFlagAddress: 'member/queryMemberStatusVIPFlagAddress',//获取用户vipflag地址等信息
//   getTemplate: 'startPage/getTemplate',//获取首页运营位
//   getAll: 'fDictionary/getAll',//获取字典文件
//
//
//   findDefaultAddress: 'address/findDefault',//查询默认地址
//   getAddressById: 'address/findInfo',//根据地址id获取地址详情
//   updateDefaultAddress: 'address/updateDefault',//查询默认地址
//   deleteAddress: 'address/delete',//删除地址
//   updateAddress: 'address/update',//更新地址
//   addAddress: 'address/add',//添加地址
//   addressList: 'address/select',//查询地址列表
//
//
//   findDressOccasion: 'member/findDressOccasion',//查询下次盒子穿衣场合
//
//
//   updateNextTimeInfo: 'order/updateNextTimeInfo',//更新预定下次壹盒详情
//   findNextTimeInfo: 'order/findNextTimeInfo',//查询预定下次壹盒详情
//
//   findCurrentOrderDetail: 'order/findCurrentOrderDetail',//查询用户当前订单详情
//   findCurrentOrderStatus: 'order/findCurrentOrderStatus',//查询用户当前订单状态
//   doSelectCloth: 'order/doSelectCloth',//提交衣服选择
//   doSettleAccountsOrder: 'order/doSettleAccountsOrder',//结算订单
//   useBalancePay: 'order/useBalancePay',//
//   addUserMessage: 'order/addUserMessage',//退货反馈
//   findExchangeProduct: 'order/findExchangeProduct',//换货查询
//
//
//   appPay: 'pay/appdo',//微信小程序支付
//   checkPay: 'pay/checkPay',//查询微信小程序支付是否成功
//   payOrderZero: '/pay/payOrderZero',//查询微信小程序支付是否成功
//
//
//   findPaidOrderInfo: 'order/findPaidOrderInfo',//
//   useCoupon: 'order/useCoupon',//使用优惠券
//   findLogisticsInfo: 'order/findLogisticsInfo',//查询物流信息
//   confirmReceiveOrder: 'order/confirmReceiveOrder',//确认收货
//   createLogisticsOrder: 'order/createLogisticsOrder',//物流返程单
//   cancelLogisticsOrder: 'order/cancelLogisticsOrder',//取消预约顺丰
//   createMembershipPrepayment:'memberShipFeePay/createMembershipPrepayment',//查询会员费
//   findOrderPreviewVoList: 'order/findOrderPreviewVoList',//查询预览详情
//   updateOrderPreviewNotLikeReason: 'order/updateOrderPreviewNotLikeReason',//预览不喜欢提交更新
//   getOrderPreviewStatus: 'order/getOrderPreviewStatus',//查询盒子是否可预览
//
//
//
//   //这里开始是jinjiang的部分
//   checkMember:'member/checkMember', //查询用户资料完整性
//   //dossier--
//   queryMemberOverview: 'member/queryMemberOverview',//查询个人档案用户信息（dossierStart）
//
//   firstFMemberInfo: 'member/firstFMemberInfo',//保存第一页用户信息
//   queryFirstFMemberInfo: 'member/queryFirstFMemberInfo',//查询第一页用户信息
//
//   secondFMemberInfo: 'member/secondFMemberInfo',//保存第二次用户信息
//   querySecondFMemberInfo: 'member/querySecondFMemberInfo',//查询第三次用户信息
//
//   thirdFMemberInfo: 'member/thirdFMemberInfo',//保存第三页用户信息
//   queryThirdFMemberInfo: 'member/queryThirdFMemberInfo',//查询第三页用户信息
//
//   forthMemberInfo: 'member/forthMemberInfo',//保存第四页用户信息
//   queryForthFMemberInfo: 'member/queryForthFMemberInfo',//查询第四页用户信息
//
//   fifthMemberInfo: 'member/fifthMemberInfo',//保存第五页用户信息
//   queryFifthFMemberInfo: 'member/queryFifthFMemberInfo',//查询第五页用户信息
//
//   updateMemberImage: 'member/updateMemberImage',//更新用户上传图片
//   upload:'uploadfile/upload',//组件内 用户上传图片
//   //ucenter--
//   exchangeCoupon:'member/exchangeCoupon',//通过兑换码换区优惠券
//   findMemberPersonal:'member/findMemberPersonal',//获取个人中心的用户信息
//   getCouponList:'order/getCouponList',//获取优惠券列表
//   findMemberPromoInfo:'member/findMemberPromoInfo',//邀请模块获取用户信息
//   updateSubscribeStatus:'member/updateSubscribeStatus',//更新用户会员状态
//   updateMemberSource:'member/updateMemberSource', //修改优惠码source注册
//   findAlipay:'alipay/findAlipay'//芝麻信用接口
// }
