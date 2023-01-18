import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import Demo from '../components/lib/demo/index'
// import '../components/css/card.scss'
// import Card from '../components/lib/card/index'

// Vue.use(Demo);   //Demo.install ---> Vue.component();
// Vue.use(Card);

//全部引入
import 'wyb-mooc-ui/dist/css/index.css';
import demo from 'wyb-mooc-ui';
Vue.use(demo);

// import 'wyb-mooc-ui/dist/css/demo.css';
// import demo from 'wyb-mooc-ui';
// Vue.use(demo);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
