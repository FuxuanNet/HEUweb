<template>
    <div class="header-section">
        <!-- 第一块：标题和 LOGO -->
        <div :class="['top-bar', { 'solid': isScrolled }]">
            <div class="logo">美育实验教学中心</div>
            <div class="title">国家大学生文化素质教育基地</div>
            <div class="school-link">
                <a href="http://www.hrbeu.edu.cn/" target="_blank">哈尔滨工程大学官网</a>
            </div>
        </div>

        <!-- 第二块：导航栏 -->
        <nav :class="['nav-bar', { 'solid': isScrolled }]">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/centerintro">中心介绍</router-link></li>
                <li>
                    <router-link to="/team">中心团队</router-link>
                    <ul class="dropdown">
                        <li><router-link to="/team/members#teamstructure">团队构成</router-link></li>
                        <li><router-link to="/team/intro#teachingresources">人员介绍</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/labs">实验室构成</router-link></li>
                <!-- <li><router-link to="/teachers">教师简介</router-link></li> -->
                <li><router-link to="/rules">规章制度</router-link></li>
                <li>
                    <router-link to="/teaching">实践教学</router-link>
                    <ul class="dropdown">
                        <li><router-link to="/teaching/courses">艺术课程</router-link></li>
                        <li><router-link to="/teaching/practice">艺术实践</router-link></li>
                        <li><router-link to="/teaching/show">艺术展演</router-link></li>
                        <li><router-link to="/teaching/competition">艺术比赛</router-link></li>
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
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
.header-section {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

/* 第一块：标题和 LOGO */
.top-bar {
    height: 10vh;
    background-color: rgba(0, 0, 0, 0.36);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
    transition: background-color 0.35s;
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
}


/* 第二块：导航栏 */
.nav-bar {
    height: 8vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
}

.nav-bar.solid {
    background-color: rgba(7, 6, 6, 0.8);
}

.top-bar.solid{
    background-color: rgba(7, 6, 6, 0.9);
}


.nav-bar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.nav-bar ul li {
    margin: 0 20px;
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

/* 下拉菜单 */
.nav-bar ul li .dropdown {
    display: none;
    position: absolute;
    margin-top: 5px;
    top: 100%;
    /* 紧贴主菜单 */
    left: 0;
    background-color: rgba(31, 30, 30, 0.589);
    padding: 10px;
    border-radius: 5px;
    z-index: 98;
}

.nav-bar ul li:hover .dropdown {
    display: block;
}

.nav-bar ul li .dropdown li {
    margin: 15px 0;
}

.nav-bar ul li .dropdown li a {
    white-space: nowrap;
    color: white;
    text-decoration: none;
}

.nav-bar ul li .dropdown li a:hover {
    color: lightblue;
}
</style>
