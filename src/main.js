import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import {Dropdown, DropdownMenu, DropdownItem,} from 'element-ui'
import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n';
import './assets/less/base.less';
Vue.config.productionTip = false
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
new Vue({
  router,
    i18n,
  render: h => h(App)
}).$mount('#app')
