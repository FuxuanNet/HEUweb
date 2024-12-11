<template>
  <div class="home">
    <!-- 主图板块 -->
    <!-- <section class="hero-section">
      <div class="content">
        <h1>欢迎来到美育实验教学中心</h1>
        <p>探索艺术教育的新天地</p>
      </div>
    </section> -->

    <!-- 滚动内容板块 -->
    <section class="content-section" v-for="(block, index) in blocks" :key="index">
      <h2>{{ block.title }}</h2>
      <p>{{ block.description }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟的内容板块数据
const blocks = ref([
  { title: "中心介绍", description: "美育实验教学中心致力于艺术教育的探索，提供丰富的课程和活动。" },
  { title: "核心理念", description: "我们的核心理念是通过艺术实践提升学生的综合素质与审美能力。" },
  { title: "实践活动", description: "每年举办艺术展演、比赛和课程活动，培养学生创新能力与艺术修养。" },
  { title: "师资力量", description: "拥有一支专业、富有经验的教师团队，为学生提供高质量的艺术教育。" },
  { title: "联系我们", description: "欢迎来电或来访，我们期待与您共同探索艺术教育的无限可能。" }
]);
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.hero-section {
  height: 90vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)), url('../assets/主图4.jpg') no-repeat center center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  /* 继承父元素的背景 */
  filter: none;
  /* 移除模糊效果 */
  z-index: -1;
  /* 将伪元素放置在背景上 */
}
.hero-section .content h1 {
  font-size: 2.5rem;
  margin: 0;
}

.hero-section .content p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.content-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.content-section:nth-child(odd) {
  background-color: #ffffff;
}

.content-section h2 {
  font-size: 2rem;
  color: #003366;
}

.content-section p {
  font-size: 1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}
</style>
