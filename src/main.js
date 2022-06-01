import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import POV from 'point-of-vue';
import pointofvue from '../node_modules/point-of-vue/dist/index.js'
import './styles.css'
const app = createApp(App);
app.use(pointofvue);
app.use(router).mount('#app')

// app.mount('#app')
