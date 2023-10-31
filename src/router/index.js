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
        description: "Nestled within the esteemed M Club Spa & Fitness in Staffordshire, we are more than just a swimming school; we are a beacon of water wisdom and wellness."
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'M Swim | About',
        description: "Swim school based in Staffordshire - Dive into the M Swim experience. Join us in celebrating the freedom, fitness, and fun that swimming brings to life. Whether you're here to conquer your fear of water, refine your strokes, or prepare for a triathlon, we're with you, every lap of the way."
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
        description: "Discover the Art of Swimming with M Swim. Our lessons are designed to be an exciting journey through water, guided by the renowned Swim England curriculum."
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document.querySelector('meta[name="description"]').content = to.meta.description;
  next();
});

export default router
