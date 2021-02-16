import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'katex/dist/katex.min.css'
// import Vue from 'vue'
import VueKatex from 'vue-katex'

createApp(App).use(store).use(router).use(VueKatex).mount('#app')
