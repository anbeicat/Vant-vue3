import { createApp } from 'vue'
import './assets/iconfont/iconfont.css';
import './style.css'
import App from './App.vue'
// 1. 引入你需要的组件
import Vant,{useCurrentLang,Locale} from 'vant';
// import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import router from './router/index'
//pinia
import store from './store'
import { useDefaultStore } from "./store/defaultSettings"
const currentLang = useCurrentLang();
// 引入英文语言包
// import enUS from 'vant/es/locale/lang/en-US';

// Locale.use('en-US');
console.log('currentLang.value',currentLang.value);
// 创建vue实例
const app = createApp(App)
app.use(Vant);
// 挂载pinia
app.use(store)
app.use(router)

router.beforeEach(async (to, from, next) => {
    if (to.path === '/' || to.path === 'home') {
      // localStorage.clear()
      next({ name: 'home' })
    }
    next()
  })


// 挂载实例
app.mount('#app');