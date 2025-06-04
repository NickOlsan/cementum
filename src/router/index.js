import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n' // Импорт i18n для перевода

// Импорт компонентов
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import WhitePaper from '@/pages/WhitePaper.vue'


import Andre from '@/projects/Andre.vue'
import ChaletMarron from '@/projects/ChaletMarron.vue'
import Grande from '@/projects/Grande.vue'
import Gym from '@/projects/Gym.vue'
import Maximus from '@/projects/Maximus.vue'
import Mriya from '@/projects/Mriya.vue'
import Tempo from '@/projects/Tempo.vue'
import Twins from '@/projects/Twins.vue'
import Baloo from '@/projects/Baloo.vue'
import Wood from '@/projects/Wood.vue'

const routes = [
    {
        path: '/mriya',
        component: Mriya,
        meta: {
            titleKey: 'metaTitleMriya',
            descriptionKey: '',
        }
    },
    {
        path: '/',
        component: HomePage,
        meta: {
            titleKey: 'metaTitleHome',
            descriptionKey: 'metaDescriptionHome'
        }
    },
    {
        path: '/about',
        component: AboutPage,
        meta: {
            titleKey: 'metaTitleAbout',
            descriptionKey: 'metaDescriptionAbout'
        }
    },
    {
        path: '/white-paper',
        component: WhitePaper,
        meta: {
            titleKey: 'metaTitleWhitePaper',
            descriptionKey: 'metaDescriptionWhitePaper'
        }
    },
    {
        path: '/andre',
        component: Andre,
        meta: {
            titleKey: 'metaTitleAndre',
            descriptionKey: '',
        }
    },
    {
        path: '/baloo',
        component: Baloo,
        meta: {
            titleKey: 'metaTitleBaloo',
            descriptionKey: '',
        }
    },
    {
        path: '/chalet-marron',
        component: ChaletMarron,
        meta: {
            titleKey: 'metaTitleChaletMarron',
            descriptionKey: '',
        }
    },
    {
        path: '/grande',
        component: Grande,
        meta: {
            titleKey: 'metaTitleGrande',
            descriptionKey: '',
        }
    },
    {
        path: '/gym',
        component: Gym,
        meta: {
            titleKey: 'metaTitleGym',
            descriptionKey: '',
        }
    },
    {
        path: '/maximus',
        component: Maximus,
        meta: {
            titleKey: 'metaTitleMaximus',
            descriptionKey: '',
        }
    },
    {
        path: '/tempo',
        component: Tempo,
        meta: {
            titleKey: 'metaTitleTempo',
            descriptionKey: '',
        }
    },
    {
        path: '/twins',
        component: Twins,
        meta: {
            titleKey: 'metaTitleTwins',
            descriptionKey: '',
        }
    },
    {
        path: '/wood',
        component: Wood,
        meta: {
            titleKey: 'metaTitleWood',
            descriptionKey: '',
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // Получаем ключи для title и description
    const titleKey = to.meta.titleKey
    const descriptionKey = to.meta.descriptionKey

    // Получаем переводы для текущего языка
    const title = i18n.global.t(titleKey)
    const description = i18n.global.t(descriptionKey)

    // Устанавливаем title и description на странице
    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute('content', description)
    }

    next()
})

export default router