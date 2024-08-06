import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'
import ServiceView from '../views/ServiceView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import OutilsView from '../views/OutilsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/a-propos',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/nos-services',
            name: 'services',
            component: ServicesView,
        },
        {
            path: '/nos-solutions',
            name: 'solutions',
            component: SolutionsView,
        },
        {
            path: '/outils-pratiques',
            name: 'outils-pratiques',
            component: OutilsView,
        },
        {
            path: '/services/:name',
            name: 'Service',
            component: ServiceView,
            props: true
        },
    ]
})

export default router
