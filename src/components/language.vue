<template>  
    <div class="language-wrap">
        <Dropdown class="languageDrop" @on-click="changeLanguage" trigger="hover" :transfer="false">
              <div class="img-box clearfix">
                  <img class="lang-img" v-show="$i18n.locale =='zh-CN' || $i18n.locale =='zh-TW'" src="../assets/img/flag/CN.png" alt="">
                  <!-- <img class="lang-img" v-show="$i18n.locale =='zh-TW'" src="../assets/img/flag/HK.png" alt=""> -->
                  <img class="lang-img" v-show="$i18n.locale =='en-US'" src="../assets/img/flag/EN.png" alt="">
                  <img class="lang-img" v-show="$i18n.locale =='ko-KR'" src="../assets/img/flag/KR.png" alt="">
                  <!-- <img class="lang-img" v-show="$i18n.locale =='hi-IN'" src="../assets/img/flag/IN.png" alt=""> -->
                  <span>{{$t('m.language')}}</span>
              </div>

              <DropdownMenu slot="list" class="languageDropdown">
                  <DropdownItem name="zh-CN" v-show="$i18n.locale !='zh-CN'">
                    <div class="flag CN"></div>
                    <span>简体中文</span>
                  </DropdownItem>
                  <DropdownItem name="zh-TW" v-show="$i18n.locale !='zh-TW'">
                    <div class="flag TW"></div>
                    <span>繁体中文</span>
                  </DropdownItem>
                  <DropdownItem name="en-US" v-show="$i18n.locale !='en-US'">
                    <div class="flag EN"></div>
                    <span>English</span>
                  </DropdownItem>
                  <DropdownItem name="ko-KR" v-show="$i18n.locale !='ko-KR'">
                    <div class="flag KO"></div>
                    <span>한국어</span>
                  </DropdownItem>
                  <!-- <DropdownItem name="hi-IN" v-show="$i18n.locale !='hi-IN'">
                    <span>IN</span>
                    <div class="flag IN"></div>
                  </DropdownItem> -->
              </DropdownMenu>
          </Dropdown>
    </div>
</template>

<script>
import utils from '@/utils/utils';
import constant from '@/common/constant';

export default {
    data(){
        return {
            
        }
    },
    created(){
        
    },
    methods: {
        changeLanguage(name){
            if(this.$i18n.locale != name){
                this.$i18n.locale = name;
                utils.setCookie(constant.COOKIE.KEY_LANGUAGE, name, 100);
                this.$router.go(0);
            }
        },
    }
}
</script>

<style lang="less">
.languageDropdown .ivu-dropdown-item .flag.CN {
    background-image: url(../assets/img/flag/CN.png);
}

.languageDropdown .ivu-dropdown-item:hover .flag.CN {
    background-image: url(../assets/img/flag/CN.png);
}

.languageDropdown .ivu-dropdown-item .flag.TW {
    background-image: url(../assets/img/flag/CN.png);
}

.languageDropdown .ivu-dropdown-item:hover .flag.TW {
    background-image: url(../assets/img/flag/CN.png);
}

.languageDropdown .ivu-dropdown-item .flag.EN {
    background-image: url(../assets/img/flag/EN.png);
}

.languageDropdown .ivu-dropdown-item:hover .flag.EN {
    background-image: url(../assets/img/flag/EN.png);
}

.languageDropdown .ivu-dropdown-item .flag.KO {
    background-image: url(../assets/img/flag/KR.png);
}

.languageDropdown .ivu-dropdown-item:hover .flag.KO {
    background-image: url(../assets/img/flag/KR.png);
}

.languageDropdown .ivu-dropdown-item .flag.IN {
    background-image: url(../assets/img/flag/IN.png);
}

.languageDropdown .ivu-dropdown-item:hover .flag.IN {
    background-image: url(../assets/img/flag/IN.png);
}
</style>