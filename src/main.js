import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.scss';
import './styles/base.scss';
import './fontAwesomeIcon';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
