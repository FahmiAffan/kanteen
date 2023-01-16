import Home from '../views/home.vue'
import About from '../views/about.vue'

export default {

    mode: 'history',

    routes: [
        {
            path: '/home',
            component: Home 
        },
        {
            path: '/about',
            component: About 
        },
    ]
}
