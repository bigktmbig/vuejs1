import router from './router'
import Vue from 'vue'
import App from './app.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

router.start(App, 'body')
