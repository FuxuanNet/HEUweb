<template>
    <div>
        <!-- 主图区域 -->
        <div class="hero-section">
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

/* 针对屏幕宽度小于等于768px（手机端）进行样式调整 */
@media (max-width: 768px) {

    /* 主页背景区域 */
    .hero-section {
        height: 60vh;
        /* 调整主图区域的高度 */
        background-size: cover;
        /* 保证背景图自适应大小 */
    }

    .hero-section .content h1 {
        font-size: 1.8rem;
        display: none;
        /* 减小标题字体 */
    }

    .hero-section .content p {
        display: none;
        font-size: 1rem;
        /* 减小段落字体 */
        margin-top: 15px;
    }

    /* 顶部栏 */
    .top-bar {
        height: 15vh;
        /* 增加顶部栏的高度 */
        flex-direction: column;
        /* 垂直排列Logo和标题 */
        align-items: center;
        padding: 10px 0;
    }

    .top-bar .logo {
        font-size: 1.2rem;
        /* 减小Logo字体 */
    }

    .title {
        font-size: 1.2rem;
        /* 减小标题字体 */
    }

    .school-link a {
        font-size: 0.9rem;
        /* 减小链接字体 */
    }

    /* 导航栏 */
    .nav-bar {
        height: 10vh;
        padding-top: 15vh;
        /* 调整导航栏的位置 */
    }

    .nav-bar ul {
        flex-direction: column;
        /* 垂直排列导航项 */
        gap: 15px;
        /* 垂直间距 */
    }

    .nav-bar ul li {
        margin: 0;
        /* 去掉左右间距 */
    }

    .nav-bar ul li a {
        font-size: 1.2rem;
        /* 增大导航项的字体 */
    }
}
</style>
