module.exports = {
    devServer: {
        proxy: {
            '/localApi': {
                target: 'http://192.168.0.222/api/exchange',
                changeOrigin: true,
                pathRewrite: {
                    '^/localApi': '/'
                }
            }

        },
    },
    pluginOptions: {
        i18n: {
            locale: 'en-US',
            fallbackLocale: 'en-US',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}