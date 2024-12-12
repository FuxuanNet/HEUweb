<template>
    <div class="header-section">
        <!-- 第一块：标题和 LOGO -->
        <div :class="['top-bar', { 'solid': isScrolled }]">
            <div class="logo">美育实验教学中心</div>
            <div class="title"><img src="../assets/基地文字.png" alt="国家大学生文化素质教育基地" class="school-logo" /></div>
            <div class="school-link">
                <a href="http://www.hrbeu.edu.cn/" target="_blank">
                    <img src="../assets/校徽及标准字（反白）.png" alt="哈尔滨工程大学官网" class="school-logo" />
                </a>
            </div>
        </div>

        <!-- 第二块：导航栏 -->
        <nav :class="['nav-bar', { 'solid': isScrolled }]">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/centerintro#centerintro">中心介绍</router-link></li>
                <li @mouseenter="showDropdown($event)" @mouseleave="hideDropdown($event)">
                    <router-link to="/team">中心团队</router-link>
                    <ul class="dropdown" ref="dropdownTeam">
                        <li><router-link to="/team/members#teamstructure">团队构成</router-link></li>
                        <li><router-link to="/team/intro#teachingresources">人员介绍</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/labs#labs">实验室构成</router-link></li>
                <li><router-link to="/rules">规章制度</router-link></li>
                <li @mouseenter="showDropdown($event)" @mouseleave="hideDropdown($event)">
                    <router-link to="/teaching#teaching">实践教学</router-link>
                </li>
                <li><router-link to="/art-troupe#teamstructure">大学生艺术团</router-link></li>
                <li @mouseenter="showDropdown($event)" @mouseleave="hideDropdown($event)">
                    <router-link to="/achievements">总结与成果</router-link>
                    <ul class="dropdown" ref="dropdownAchievements">
                        <li><router-link to="/achievements#results">年度总结</router-link></li>
                        <li><router-link to="/achievements#summary">教学成果</router-link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
let timeoutId = null; // 用来存储定时器ID

const handleScroll = () => {
    isScrolled.value = window.scrollY > 100;
};

const showDropdown = (event) => {
    const dropdown = event.target.querySelector('.dropdown');
    if (dropdown) {
        clearTimeout(timeoutId); // 鼠标进入时清除定时器
        dropdown.style.display = 'block';
        dropdown.style.transform = 'translateY(0)'; // 展开
        dropdown.style.opacity = '1'; // 显示
    }
};

const hideDropdown = (event) => {
    const dropdown = event.target.querySelector('.dropdown');
    if (dropdown) {
        // 设置延迟隐藏
        timeoutId = setTimeout(() => {
            dropdown.style.transform = 'translateY(-20px)'; // 折叠
            dropdown.style.opacity = '0'; // 隐藏
        }, 50); 
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.school-link {
    text-align: center;
    margin-top: 20px;
}

.school-logo {
    width: 320px;
    height: auto;
    cursor: pointer;
}

.header-section {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

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
    font-size: 1.8rem;
    font-weight: 600;
}

.title {
    font-size: 1.5rem;
}

.title img {
    width: 600px;
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

.nav-bar {
    height: 8vh;
    padding: 0 15%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
}

.nav-bar.solid {
    background-color: rgba(7, 6, 6, 0.8);
}

.top-bar.solid {
    background-color: rgba(7, 6, 6, 0.9);
}

.nav-bar ul {
    width: 100%;
    
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
    /* 间距 */
}

.nav-bar ul li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    /* 每个项占据相同的空间 */
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: border-color 0.3s ease;
    /* 下边框变换动画 */
}

.nav-bar ul li:hover {
    border-color: #000408;
    /* 悬浮时边框变成深蓝色 */
}

.nav-bar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 5px;
    display: block;
    /* 确保文字在导航项中居中显示 */
}

.nav-bar ul li:hover>a {
    color: lightblue;
}

.nav-bar ul li .dropdown {
    display: none;
    position: absolute;
    margin-top: 5px;
    top: 100%;
    left: 0;
    background-color: rgba(31, 30, 30, 0.589);
    padding: 10px;
    border-radius: 5px;
    z-index: 98;
    transform: translateY(-20px);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-bar ul li:hover .dropdown {
    display: block;
    transform: translateY(0);
    opacity: 1;
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
