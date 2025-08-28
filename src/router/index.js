import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'M Swim | Swim School in Staffordshire',
        description: "Embark on your swimming journey with expert guidance at M Swim in Staffordshire, conveniently nestled within M Club Spa & Fitness in Hanley and Newcastle-under-Lyme. Our comprehensive range of classes includes children's beginner swimming lessons, baby and toddler swimming sessions, and adult swimming lessons. Whether you're seeking swim lessons near Stoke-on-Trent or eager to learn to swim proficiently, explore our tailored programs designed to nurture your aquatic skills."
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'M Swim | About',
        description: "Swimming lessons in Staffordshire - Dive into the M Swim experience. Join us in celebrating the freedom, fitness, and fun that swimming brings to life. Whether you're here to conquer your fear of water, refine your strokes, or prepare for a triathlon, we're with you, every lap of the way."
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'M Swim | Contact',
        description: "For more information and to book please submmit an enquiry or send us an email mswim@mclubspaandfitness.com."
      }
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('../views/LessonsView.vue'),
      meta: {
        title: 'M Swim | Swim Lessons in Staffordshire',
        description: "Dive into top-quality swimming lessons at M Swim in Stoke-on-Trent, serving Newcastle-under-Lyme and Hanley. Our tailored programs cater to all ages and skill levels, starting from newborns to adults. We offer a variety of options including baby & parent, children’s beginner swimming classes, adult sessions, group sessions, 1:1 private lessons, and school lessons. Learn to swim confidently with M Swim today, an official STA partner and accredited STA Swim Academy."
      }
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.querySelector('meta[name="description"]').content = to.meta.description;
  next();
});

export default router
