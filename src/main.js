import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Toast } from 'vant';
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
