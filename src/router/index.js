import Vue from 'vue'
import Router from 'vue-router'
// import pageFirst from '@/pages/page-first/index'
// import pageSecond from '@/pages/page-second/index'

Vue.use(Router)
// 重写路由方法 在当前页面点击logo地址不更新的情况下 避免报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'pageFirst',
      component: () =>
        import('@/pages/page-first/index'),
    },
    {
      path: '/second',
      name: 'pageSecond',
      component: () =>
        import('@/pages/page-second/index'),
    }
  ]
})
