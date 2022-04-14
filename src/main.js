import { createApp } from 'vue'
import App from './App.vue'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExtraExtra from './components/ExtraExtra.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

library.add(fas)
const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('extra-extra', ExtraExtra)
app.mount('#app')
