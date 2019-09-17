import urlParams from '@/utils/setBaseUrl'
const constant = {};

constant.url = urlParams;
constant.env = process.env;

// cookie信息
constant.COOKIE = {}
constant.COOKIE.KEY_TOKEN = 'okotc_token'

// 接口请求携带信息
constant.HTTP = {};
constant.HTTP.KEY_TOKEN = 'okotc_token'

// 接口返回信息
constant.RESP_CODE = {};
constant.RESP_CODE.TOKEN_EXPIRE = 1005;
constant.RESP_CODE.STATUS_SUCCESS = 0;

export default constant;