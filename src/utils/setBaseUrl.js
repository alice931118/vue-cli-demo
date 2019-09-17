let urlParams = {
    baseUrl: "",
}

switch (process.env.VUE_APP_ENV_ALIAS) {
    case 'prod':
        urlParams.baseUrl = '';
        break;
    case 'test':
        urlParams.baseUrl = '/api/';
        break;
    default:
        urlParams.baseUrl = '/localApi';
}

export default urlParams;