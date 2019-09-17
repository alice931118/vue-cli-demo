import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            component: (resolve) => require(['./views/Index.vue'], resolve),
            children: [{
                    path: '/',
                    name: 'home',
                    component: (resolve) => require(['./views/Home.vue'], resolve)
                },
                {
                    path: '/login',
                    name: 'login',
                    component: (resolve) => require(['@/views/login/login.vue'], resolve)
                },
            ]
        },
        {
            path: '/error',
            name: 'error',
            component: (resolve) => require(['@/views/error-page/404.vue'], resolve)
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({
            name: from.name
        }) : next('/error');
    } else {
        next();
    }
})

export default router