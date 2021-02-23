import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Model from '../views/Model.vue'
import Team from '../views/Team.vue'
import Description from '../views/Description.vue'
import Design from '../views/Design.vue'
import Safety from '../views/Safety.vue'
import Results from '../views/Results.vue'
import Future from '../views/Future.vue'
import Hardware from '../views/Hardware.vue'
import HP from '../views/HP.vue'
import IHP from '../views/IHP.vue'
import EAE from '../views/EAE.vue'
import Inclusion from '../views/Inclusion.vue'
import Bioethics from '../views/Bioethics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Model',
    name: 'Model',
    component: Model
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Design',
    name: 'Design',
    component: Design
  },
  {
    path: '/Description',
    name: 'Description',
    component: Description
  },
  {
    path: '/Safety',
    name: 'Safety',
    component: Safety
  },
  {
    path: '/Results',
    name: 'Results',
    component: Results
  },
  {
    path: '/Future',
    name: 'Future',
    component: Future
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project
  },
  {
    path: '/Hardware',
    name: 'Hardware',
    component: Hardware
  },
  {
    path: '/Bioethics',
    name: 'Bioethics',
    component: Bioethics
  },
  {
    path: '/HP',
    name: 'HP',
    component: HP
  },
  {
    path: '/IHP',
    name: 'IHP',
    component: IHP
  },
  {
    path: '/EAE',
    name: 'EAE',
    component: EAE
  },
  {
    path: '/Inclusion',
    name: 'Inclusion',
    component: Inclusion
  },
  {
    path: '/*',
    name: 'default',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
