import { createRouter, createWebHistory } from 'vue-router'

// 导入视图组件
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/centerintro',
      name: 'CenterIntro',
      component: () => import('../views/CenterIntro.vue'),
    },
    {
      path: '/team',
      name: 'Team',
      component: () => import('../views/Teachers.vue'),
    },
    {
      path: '/team/members',
      name: 'TeamMembers',
      component: () => import('../views/Teachers.vue'),
    },
    {
      path: '/team/intro',
      name: 'TeamIntro',
      component: () => import('../views/Teachers.vue'),
    },
    {
      path: '/labs',
      name: 'Labs',
      component: () => import('../views/Labs.vue'),
    },
    {
      path: '/rules',
      name: 'Rules',
      component: () => import('../views/Rules.vue'),
    },
    {
      path: '/teaching',
      name: 'Teaching',
      component: () => import('../views/Teaching/Teaching.vue'),
    },
    {
      path: '/teaching/courses',
      name: 'TeachingCourses',
      component: () => import('../views/Teaching/Teaching.vue'),
    },
    {
      path: '/teaching/practice',
      name: 'TeachingPractice',
      component: () => import('../views/Teaching/Teaching.vue'),
    },
    {
      path: '/teaching/show',
      name: 'TeachingShow',
      component: () => import('../views/Teaching/Teaching.vue'),
    },
    {
      path: '/teaching/competition',
      name: 'TeachingCompetitions',
      component: () => import('../views/Teaching/Teaching.vue'),
    },
    {
      path: '/art-troupe',
      name: 'ArtTroupe',
      component: () => import('../views/ArtTroupe.vue'),
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: () => import('../views/Achievements.vue'),
    },
    // {
    //   path: '/achievements/summary',
    //   name: 'AchievementsSummary',
    //   component: () => import('../views/Achievements.vue'),
    // },
    // {
    //   path: '/achievements/results',
    //   name: 'AchievementsResults',
    //   component: () => import('../views/Achievements.vue'),
    // },
  ],
})

// 滚动行为配置
router.afterEach((to) => {
  if (to.hash) {
    // 如果存在 hash，滚动到指定的元素
    const element = document.getElementById(to.hash.slice(1)); // 去掉 hash 前缀
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // 没有 hash 时，默认滚动到页面顶部
    window.scrollTo(0, 0);
  }
});

export default router;
