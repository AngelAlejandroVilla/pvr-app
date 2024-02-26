import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Tooltip } from "bootstrap";    
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'

import './assets/main.css'

import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus);
app.use(VueAwesomeSwiper)

app.directive("tooltip", (el) => {
    new Tooltip(el);
});

app.mount('#app')
