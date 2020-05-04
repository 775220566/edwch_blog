import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/', component: () => import('@/views/Index')
      },
      {
        path: '/about', component: () => import('@/views/About')
      },
      {
        path: '/artlist',
        component: () => import('../views/ArtList.vue')
      },
      {
        path: '/artview/:id',
        component: () => import('../views/ArtView.vue')
      },
      {
        path: '/artadd',
        component: () => import('../views/ArtAdd.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 白名单
const whiteList = ['/login']

// 导航守卫
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next()
    } else {
      if (!store.state.user.userInfo) {
        console.log('userInfo拉取')
        // 拉取用户信息
        store.dispatch('user/fetchUserInfo')
          .then(() => {
            console.log('拉取成功')
            next({ ...to, replace: true })
          }).catch(error => {
            console.log(error)
          })
      } else {
        console.log('userInfo验证成功')
        next()
      }
    }
  } else {
    console.log('token验证失败，重新登录')
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1 || to.meta.public) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
})

export default router
