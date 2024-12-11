import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/centerintro', name: 'CenterIntro', component: () => import('../views/CenterIntro.vue') },
    { path: '/team', name: 'Team', component: () => import('../views/Team/TeamIntro.vue') },
    { path: '/team/members', name: 'TeamMembers', component: () => import('../views/Team/TeamMembers.vue') },
    { path: '/team/intro', name: 'TeamIntro', component: () => import('../views/Team/TeamIntro.vue') },
    { path: '/labs', name: 'Labs', component: () => import('../views/Labs.vue') },
    { path: '/teachers', name: 'Teachers', component: () => import('../views/Teachers.vue') },
    { path: '/rules', name: 'Rules', component: () => import('../views/Rules.vue') },
    { path: '/teaching', name: 'Teaching', component: () => import('../views/Teaching/Teaching.vue') },
    { path: '/teaching/courses', name: 'TeachingCourses', component: () => import('../views/Teaching/TeachingCourses.vue') },
    { path: '/teaching/practice', name: 'TeachingPractice', component: () => import('../views/Teaching/TeachingPractice.vue') },
    { path: '/teaching/show', name: 'TeachingShow', component: () => import('../views/Teaching/TeachingShow.vue') },
    { path: '/teaching/competition', name: 'TeachingCompetitions', component: () => import('../views/Teaching/TeachingCompetition.vue') },
    { path: '/art-troupe', name: 'ArtTroupe', component: () => import('../views/ArtTroupe.vue') },
    { path: '/achievements', name: 'Achievements', component: () => import('../views/Achievements/Achievements.vue') },
    { path: '/achievements/summary', name: 'AchievementsSummary', component: () => import('../views/Achievements/Achievements.vue') },
    { path: '/achievements/results', name: 'AchievementsResults', component: () => import('../views/Achievements/Achievements.vue') },

  ],
})

export default router
