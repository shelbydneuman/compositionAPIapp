import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pointofvue from 'point-of-vue'
//import {getCompState} from '../node_modules/w-point-of-vue/dist/index.js'
// import pointofvue from 'point-of-vue';
// import { getCompState } from 'point-of-vue';


import './styles.css'
const app = createApp(App);
app.use(pointofvue);
app.use(router).mount('#app')


//export {getCompState as getCompState}

// app.mount('#app')
