import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Tooltip } from "bootstrap";    
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'

import './assets/main.css'

import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";

const app = createApp(App)

app.use(VCalendar, {})
app.use(createPinia())
app.use(router)
app.use(ElementPlus);
app.use(VueAwesomeSwiper)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD-9tSr3Z3Y',
    },
})

app.directive("tooltip", (el) => {
    new Tooltip(el);
});

app.mount('#app')
