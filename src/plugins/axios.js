"use strict";

import Vue from 'vue';
import axios from "axios";
import utils from '@/utils/utils';
import constant from '@/common/constant'


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: constant.url.baseUrl || "",
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
let _token = utils.getCookie(constant.COOKIE.KEY_TOKEN)
let VueThis = Vue.prototype;

// 添加请求拦截器
_axios.interceptors.request.use(
    function(config) {
        VueThis.$Loading.start();
        if (_token) {
            config.headers[constant.HTTP.KEY_TOKEN] = _token
        }
        // Do something before request is sent
        return config;
    },
    function(error) {
        VueThis.$Loading.error();
        // Do something with request error
        return Promise.reject(error);
    }
);

// 添加响应拦截器
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        let _data = response.data;
        // if (_data && _data.status == constant.RESP_CODE.TOKEN_EXPIRE) {
        //     if (document.getElementsByClassName('login').length < 1) {
        //         location.href = "/login";
        //     }
        // } else 
        if (data.status == constant.RESP_CODE.STATUS_SUCCESS) {
            VueThis.$Loading.finish();
        } else {
            VueThis.$Loading.error();
        }

        return _data;
    },
    function(error) {
        VueThis.$Loading.error();
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;