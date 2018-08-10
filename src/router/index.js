import Vue from 'vue'

import Router from 'vue-router'



import Index from '@/pages/index/Index'

import Error from '@/pages/error/Error'

import Login from '@/pages/login/Login'
import UserAgreement from '@/pages/login/UserAgreement'



import Home from '@/pages/home/Home'

import DossierStart from '@/pages/dossier/DossierStart'
import Dossier from '@/pages/dossier/Dossier'
import DossierComplete from '@/pages/dossier/DossierComplete'


import Center from '@/pages/center/Center'
import Coupon from '@/pages/center/Coupon'
import CouponConvert from '@/pages/center/CouponConvert'
import Invite from '@/pages/center/Invite'
import OpenMember from '@/pages/center/OpenMember'
import Questions from '@/pages/center/Questions'

Vue.use(Router)




export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/error',
      name: 'Error',
      component: Error
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/userAgreement',
      name: 'UserAgreement',
      component: UserAgreement
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/dossierStart',
      name: 'DossierStart',
      component: DossierStart
    },{
      path: '/dossier',
      name: 'Dossier',
      component: Dossier
    },{
      path: '/dossierComplete',
      name: 'DossierComplete',
      component: DossierComplete
    },{
      path: '/center',
      name: 'Center',
      component: Center
    },{
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    }
  ]
})
