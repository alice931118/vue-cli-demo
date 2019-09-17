import Cookies from 'js-cookie';

let utils = {}


// session->store
utils.getAccount = function(that) {
    // let _account = '';
    // if (utils.getCookie(constant.ACCOUNT_KEY)) {
    //     if (JSON.parse(sessionStorage.getItem(constant.ACCOUNT_KEY))) {
    //         _account = JSON.parse(sessionStorage.getItem(constant.ACCOUNT_KEY));
    //         that.$store.commit('updateAccount', _account);
    //     } else {
    //         that.$store.commit('updateAccount', JSON.parse(utils.getCookie(constant.ACCOUNT_KEY)));
    //     }
    // }
}


utils.getCookieKey = (key) => {
    if (Cookies.get(key) && Cookies.get(key) != 'undefined') {
        return Cookies.get(key);
    }
}


utils.setSession = function(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
}


utils.getSession = function(key) {
    let _obj = '';
    if (sessionStorage.getItem(key)) {
        _obj = JSON.parse(sessionStorage.getItem(key));
    }
    return _obj;
}



// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子： 
// utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// utils.formatDate(new Date(), "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
utils.formatDate = function(date, fmt) {
    date = new Date(date)
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}




export default utils