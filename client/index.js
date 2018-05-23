import '@/assets/style/index.scss'
import Vue from 'vue'
import axios from 'axios'
import App from './app'

Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    render: h => h(App)
})
