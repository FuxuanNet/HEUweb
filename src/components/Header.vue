<template>
    <div>
        <!-- 主图区域 -->
        <div class="hero-section">
            <!-- 第一块：标题和 LOGO -->
            <!-- <div class="top-bar">
                <div class="logo">美育实验教学中心</div>
                <div class="title">国家大学生文化素质教育基地</div>
                <div class="school-link">
                    <a href="http://www.hrbeu.edu.cn/" target="_blank">哈尔滨工程大学官网</a>
                </div>
            </div>

            <nav :class="['nav-bar', { 'solid': isScrolled }]">
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/team/intro">中心介绍</router-link></li>
                    <li>
                        <router-link to="/team">中心团队</router-link>
                        <ul class="dropdown">
                            <li><router-link to="/team/members">团队构成</router-link></li>
                            <li><router-link to="/team/intro">人员介绍</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/labs">实验室构成</router-link></li>
                    <li><router-link to="/teachers">教师简介</router-link></li>
                    <li><router-link to="/rules">规章制度</router-link></li>
                    <li>
                        <router-link to="/teaching">实验教学</router-link>
                        <ul class="dropdown">
                            <li><router-link to="/teaching/courses">艺术课程</router-link></li>
                            <li><router-link to="/teaching/practice">艺术实践</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/art-troupe">大学生艺术团</router-link></li>
                    <li>
                        <router-link to="/achievements">总结与成果</router-link>
                        <ul class="dropdown">
                            <li><router-link to="/achievements/summary">年度总结</router-link></li>
                            <li><router-link to="/achievements/results">教学成果</router-link></li>
                        </ul>
                    </li>
                </ul>
            </nav> -->

            <HeaderSection></HeaderSection>
            <div class="content">
                <h1>欢迎来到美育实验教学中心</h1>
                <p>探索艺术教育的新天地</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderSection from '../components/HeaderSection.vue';
const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.hero-section {
    height: 90vh;
    background: linear-gradient(to bottom, rgba(19, 19, 173, 0.7), rgba(75, 75, 184, 0.5)), url('../assets/主图4.jpg') no-repeat center center/cover;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;

    filter: none;

    z-index: -1;
 
} */

.top-bar {
    position: fixed;
    top: 0;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100;
}

.top-bar .logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.title {
    font-size: 1.5rem;
}

.school-link a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease;
}

.school-link a:hover {
    color: black;
    /* 悬浮时变黑 */
}

.school-link a:visited,
.school-link a:active {
    color: white;
    /* 点击后保持白色 */
}

.nav-bar {
    position: fixed;
    top: 0px;
    height: 20vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    /* padding: 15 0 0 0; */
    padding-top: 15vh;
    z-index: 99;
    transition: background-color 0.3s;
}

.nav-bar.solid {
    background-color: rgba(7, 6, 6, 0.9);
}

.nav-bar ul {
    list-style: none;
    /* margin-top: 15vh; */
    padding: 0;
    display: flex;
}

.nav-bar ul li {
    margin: 0 15px;
    position: relative;
}

.nav-bar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 5px;
}

.nav-bar ul li:hover>a {
    color: lightblue;
}

.nav-bar ul li .dropdown {
    display: none;
    position: absolute;
    top: calc(5px);
    /* 紧贴主菜单，添加5px间距 */
    /* 确保下拉菜单紧贴主菜单 */
    left: 0;
    /* 与主菜单左对齐 */
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    z-index: 98;
}

.nav-bar ul li:hover .dropdown {
    display: block;
}

.nav-bar ul li .dropdown li {
    margin: 10px 0;
}

.nav-bar ul li .dropdown li a {
    white-space: nowrap;
    /* 确保内容不换行 */
    color: white;
    text-decoration: none;
}

.nav-bar ul li .dropdown li a:hover {
    color: lightblue;
    /* 悬停效果 */
}

.hero-section .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-section .content h1 {
    font-size: 2.5rem;
    margin: 0;
}

.hero-section .content p {
    font-size: 1.2rem;
    margin-top: 20px;
}
</style>
