/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp, VueElement } from 'vue';
import { App } from './components/App.vue';


createApp(App).mount('#kanteen');

// const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);


// app.mount('#app');