import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import HomePage from './../view/HomePage.vue';
import Information from './../view/Information.vue';

const routes = [
  { path: '/', component: HomePage },
  {
      path: '/Information/:id',
      component: Information
    }
]


export default new VueRouter({
  routes
})
