# 快速开始

#### 安装组件

```bash
npm -i wyb-mooc-ui
```


#### 引用组件库
>在main.js中引用组件库

```javascript
//全部引用
import 'wyb-mooc-ui/dist/css/index.css';
import MUI from 'wyb-mooc-ui';
Vue.use(MUI);

//按需引入
import 'wyb-mooc-ui/dist/css/demo.css';
import { Demo } from 'wyb-mooc-ui';
Vue.use(Demo);
```

