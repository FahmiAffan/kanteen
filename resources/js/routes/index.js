import Home from '../views/home.vue'
import About from '../views/about.vue'

export default {

    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home 
        },
        {
            path: '/about',
            component: About 
        },
    ]
}
