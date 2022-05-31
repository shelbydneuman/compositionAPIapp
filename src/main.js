import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import path from 'path'
// import plugin from path.resolve(__dirname, './src/plugin.ts')
import POV from 'my-awesome-plugin';
import './styles.css'
const app = createApp(App);
app.use(plugin);
app.use(router).mount('#app')

// app.mount('#app')
