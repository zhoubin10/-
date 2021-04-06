import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VueLocalStorage from 'vue-ls';
import 'lib-flexible/flexible';
import DC from 'dvgis/dc-sdk/dist/dc.base.min'
import DcCore from 'dvgis/dc-sdk/dist/dc.core.min'
import DcUI from 'dvgis/dc-ui/dist/dc.ui.min'
import 'dvgis/dc-sdk/dist/dc.core.min.css'

Vue.config.productionTip = false
Vue.use(VueLocalStorage);

global.DC = DC
DC.use(DcCore)
Vue.use(DcUI)

router.beforeEach((to, from, next) => {
  next()
});

router.afterEach(() => {

});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
