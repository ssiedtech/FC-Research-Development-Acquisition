import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router/index';

import vuescroll from 'vuescroll';

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#ffce07',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: .1,
      size: '6px',
      disable: false
    }
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
