/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// import {createApp} from 'vue'

// import App from './App.vue'

// createApp(App).mount("#kanteen")

//batas

const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});
app.use(router);

app.mount("#kanteen");

//bukaann \/

// const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

// app.mount('#app');
