import urlParams from '@/utils/setBaseUrl'
const constant = {};

constant.url = urlParams;
constant.env = process.env;

// cookie
constant.COOKIE = {}
constant.COOKIE.KEY_TOKEN = 'okotc_token'
constant.COOKIE.KEY_LANGUAGE = 'okotc_language'

// seesion
constant.SEESION = {}
constant.SEESION.KEY_USERINFO = 'okotc__userInfo'

// request information
constant.HTTP = {};
constant.HTTP.KEY_TOKEN = 'okotc_token'

// response information
constant.RESP_CODE = {};
constant.RESP_CODE.TOKEN_EXPIRE = 1005;
constant.RESP_CODE.STATUS_SUCCESS = 0;

export default constant;