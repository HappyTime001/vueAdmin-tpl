import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: '',
        component: () => import('@/views/index/index'),
        meta: { title: '首页', icon: 'fas fa-home fa-lg' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/table',
    name: '',
    meta: { title: '设置', icon: 'fas fa-home fa-lg' },
    children: [
      { path: 'setAccounts', 
        name: '建账导账',
        //component: () => import('@/views/'),
        meta: { title: '建账导账', icon: 'fa-envelope-open-o' }
      },
      { path: 'others', 
        name: '其他页面',
        //component: () => import('@/views/'),
        meta: { title: '其他页面', icon: 'fa-envelope-open-o' }
      },
      
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '示例', icon: 'fas fa-home fa-lg' },
    children: [
      { path: 'newMovie', 
        name: '热映电影',
        component: () => import('@/views/movie/newMovie'),
        meta: { title: '热映电影', icon: 'fa-envelope-open-o' }
      },
      { path: 'movieSearch', 
        name: '电影搜索',
        component: () => import('@/views/movie/movieSearch'),
        meta: { title: '电影搜索', icon: 'fa-envelope-open-o' }
      },
      { path: 'form', 
        component: () => import('@/views/form/form2'),
        name: 'form',
        meta: { title: 'form表单编辑', icon: 'fa-envelope-open-o' }
      },
      
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '表单', icon: 'fa-envelope-open-o' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

