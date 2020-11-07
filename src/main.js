import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.scss';
import './styles/base.scss';
import './fontAwesomeIcon';
import commonComponents from './components/common';

/**
 * global component 등록
 */
Object.keys(commonComponents).forEach((component) => {
  Vue.component(component, commonComponents[component]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
