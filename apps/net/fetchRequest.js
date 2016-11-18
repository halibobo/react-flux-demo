/**
 * Created by su on 2016/11/18.
 */
import 'whatwg-fetch';
import MD5 from 'md5';

/**
 * 请求数据
 * @param url
 * @param data
 */
function fetchRequest(url ,data) {
    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Platform": "a",
            "Sign":  "secret" + MD5(data)
        },
        body: JSON.stringify(data),
        credentials: "no-cors"
    }).then ((res) => {
        resolve (dispatch (res));
    }).then ((res) => {
        resolve (dispatch (res));
    }) .catch ((err) => {
        msg.emit ('tip', '您的网络不给力');
        resolve ({res: {}, err: err});
        console.log(error.message);
    })
}


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



export default fetchRequest;