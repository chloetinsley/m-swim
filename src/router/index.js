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
        description: "Embark on your swimming journey with expert guidance at M Swim in Staffordshire, conveniently nestled within M Club Spa & Fitness in Hanley and Newcastle-under-Lyme and Waterworld. Our comprehensive range of classes includes children's beginner swimming lessons, baby and toddler swimming sessions, and adult swimming lessons. Whether you're seeking swim lessons near Stoke-on-Trent or eager to learn to swim proficiently, explore our tailored programs designed to nurture your aquatic skills."
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
        description: "For more information and to book please submmit an enquiry or send us an email mswim@waterworld.co.uk."
      }
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('../views/LessonsView.vue'),
      meta: {
        title: 'M Swim | Swim Lessons in Staffordshire',
        description: "Learn to swim with M Swim, an official STA partner and an accredited STA Swim Academy. Our lessons are designed to be an exciting journey through water."
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
