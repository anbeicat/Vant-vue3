/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-04-11 09:31:34
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-10-21 22:27:36
 * @description: 
 * @FilePath: /Vant-vue3/src/router/index.ts
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    createWebHistory
} from 'vue-router'
import home from '../components/layout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: home,
        children:[
            {
                path: '/home/buttons',
                name: 'buttons',
                component: () => import('../pages/buttons.vue'),
              },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})

export default router