import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch/vue3/es';

const app = createApp(App)

app.use(InstantSearch)

app.mount('#app')
