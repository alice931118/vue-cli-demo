import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import tw from 'iview/dist/locale/zh-TW';
import ko from 'iview/dist/locale/ko-KR';

Vue.use(VueI18n)


// let iviewLocale = [
//     { 'en': en },
//     { 'zh': zh },
//     { 'tw': tw },
//     { 'ko': ko }
// ]
// function loadLocaleMessages() {
//     const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//     const messages = {}
//     locales.keys().forEach(key => {
//         const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//         if (matched && matched.length > 1) {
//             const locale = matched[1]
//             let _localeObj = locales(key);
//             iviewLocale.forEach(item => {
//                 if (item[locale]) {
//                     _localeObj = Object.assign(_localeObj, item[locale])
//                 }
//             })

//             messages[locale] = _localeObj
//         }
//     })
//     return messages
// }

export default new VueI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    // messages: loadLocaleMessages(),
    messages: {
        'zh-CN': Object.assign(require('../locales/zh.json'), zh),
        'en-US': Object.assign(require('../locales/en.json'), en),
        'zh-TW': Object.assign(require('../locales/tw.json'), tw),
        'ko-KR': Object.assign(require('../locales/ko.json'), ko),
    }
})