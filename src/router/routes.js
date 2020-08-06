import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home.vue'

import TestSlide from '../pages/milcon/TestSlide.vue';


// import router2

import secondaryRouter from './secondaryRoute.js';
let routes = [
    {
        path: '',
        title: 'Home',
        icon: 'home',
        component: MainLayout,
        children: [
          { path: '/', name: 'home', title: 'Home', component: Home, props: true },
        ]
    },
    {
      path: '/milcon',
      title: 'TestSectionTitle',
      icon: 'layers',
      redirect: '/TestSectionTitle/TerminalLearningObjective',
      component: MainLayout,
      children: [
        { 
          title: 'Test Slide',
          path: '/TestSectionTitle/TestSlide',
          name: 'TestSlide',
          component: TestSlide,
        },
      ]
    }
];

secondaryRouter.map((route) => {
  routes[1].children.push(route);
});

export default routes;