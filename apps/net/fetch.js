import 'whatwg-fetch'
import assign from 'object-assign';
import {msg} from 'iflux2';
import QMKit from './kit';
import {
  HTTP_TIME_OUT
} from './config';

/**
 * dispatch
 *
 * @res fetch获取的response
 */
function dispatch (res) {
  const { result, errMsg } = res;
  let dataResult = {err: null, res: {}};
  switch (result) {
    case 'ok':
      dataResult = {res: res.data, err: null};
      break;
    case 'fail':
      msg.emit ('tip', res.msg);
      dataResult = {res: {}, err: new Error ('serverError')};
      break;
    case 'tokenInvalid':
      // msg.emit ('tokenInvalid');
      dataResult = {res: {}, err: new Error ('tokenInvalid')};
      break;
    case 'lockUser':
      // msg.emit ('lockUser');
      dataResult = {res: {}, err: new Error ('lockUser')};
      break;
    case 'loginErr':   // 其它所有登录失败,需要跳转到登录页面;
      // msg.emit ('loginErr', errMsg);
      dataResult = {res: {}, err: new Error ('loginErr')};
      break;
  }

  return dataResult;
}

/**
 * fetchPromise
 */
function fetchPromise(url, req) {

  if (!window.token) {
    //headers['Authorization'] = 'JWT ' + window.token
    QMKit.isLogin(); // 切换到下载页界由于跳转到不同域导致token丢失, 这里再强行判断一下; localStorage中有则使用;
  }

  const request = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Platform': 'wechat',
      'Authorization': 'JWT' + (window.token ? ' ' + window.token : ''), // 空格放在未尾ios10以下不支付;
      //'RequestDomain': 'http://store006030.b2b.1000.com',//'http://maomao.wxdhtest2.1000.com',// http://store500110.b2b.1000.com', //http://store006030.b2b.1000.com/
      //'X-Request-With': null,
    }
  };

  const merge = assign ({}, request, req);

  return new Promise ((resolve) => {
    //增加http的超时机制
    const timeout = (HTTP_TIME_OUT || 10),
      timeoutId = setTimeout (() => {
        msg.emit ('tip', '您的网络不给力');
        resolve ({res: {}, err: new Error ('timeout')});
      }, timeout * 1000);


    //开始获取数据
    fetch (url, merge)
      .then ((res) => {
        if(__DEV__){
          console.log("url:", url, merge);
        }
        clearTimeout (timeoutId);
        return res.json ()
      })
      .then ((res) => {
        resolve (dispatch (res));
      })
      .catch ((err) => {
        clearTimeout (timeoutId);
        msg.emit ('tip', '您的网络不给力');
        //TODO: 血的教训
        //是应用层使用的时候一定用then，不要直接用done
        //done会导致整个进程crash掉。
        resolve ({res: {}, err: err});
      })
  });
}


export default fetchPromise;
