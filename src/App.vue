<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import utils from '@/utils/utils'
import constant from '@/common/constant';

export default {
  name: 'app',
  created(){
      if(utils.getCookie(constant.COOKIE.KEY_LANGUAGE)){
          this.$i18n.locale = utils.getCookie(constant.COOKIE.KEY_LANGUAGE);
      }
      else {
        let _language = window.navigator.language.toLowerCase();
        if(_language == 'zh-cn' || _language == 'zh'){
          _language = 'zh-CN';
        }else if(_language == 'zh-tw'){
          _language = 'zh-TW';
        }else if(_language == 'en-us' || _language=='en'){
          _language = 'en-US';
        }else if(_language == 'ko-kr' || _language == 'ko'){
          _language = 'ko-KR';
        }else {
          _language = 'en-US';
        }
        this.$i18n.locale = _language;
        utils.setCookie(constant.COOKIE.KEY_LANGUAGE, _language, 100);
      }
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
