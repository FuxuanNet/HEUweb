<template>
    <div class="container">
        <div class="box" v-for="(club, index) in clubs" :key="club.name" :class="{ 'reverse-layout': index % 2 !== 0 }">
            <div class="box-content">
                <div class="box-title">{{ club.name }}</div>
                <div class="box-description">{{ club.description }}</div>
            </div>
            <!-- 动态加载图片 -->
            <img :src="getClubImage(club.name)" alt="Club Image" class="box-image" />
        </div>
    </div>
</template>

<script setup>
const clubs = [
    { name: "“飞鹭”舞蹈团", description: "这是第一个社团的介绍" },
    { name: "4U Family街舞团", description: "这是第二个社团的介绍" },
    { name: "爱乐钢琴团", description: "这是第三个社团的介绍" },
    { name: "冰雪艺术工作坊", description: "这是第四个社团的介绍" },
    { name: "畅·响声乐团", description: "这是第五个社团的介绍" },
    { name: "程澈剧团", description: "这是第六个社团的介绍" },
    { name: "地平线视觉设计工作室", description: "这是第七个社团的介绍" },
    { name: "管弦乐团", description: "这是第八个社团的介绍" },
    { name: "海之韵合唱团", description: "这是第九个社团的介绍" },
    { name: "军乐团", description: "这是第十个社团的介绍" },
    { name: "民乐团", description: "这是第十一个社团的介绍" },
    { name: "启点绘画工作室", description: "这是第十二个社团的介绍" },
    { name: "手风琴团", description: "这是第十三个社团的介绍" },
    { name: "息兮古筝乐团", description: "这是第十四个社团的介绍" },
    { name: "语翼朗诵团", description: "这是第十五个社团的介绍" },
    // { name: "社团16", description: "这是第十六个社团的介绍" }
];

// 动态导入图片
const images = import.meta.glob('@/assets/大学生艺术团-*/figures/1.png');

// 获取社团对应的图片路径
function getClubImage(clubName) {
    const imagePath = images[`@/assets/大学生艺术团-${clubName}figures/1.png`];
    return imagePath ? imagePath() : '';
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 居中对齐 */
    gap: 20px;
    padding: 20px;
}

.box {
    display: flex;
    width: 80%;
    /* 盒子的宽度 */
    max-width: 1200px;
    /* 最大宽度 */
    height: 300px;
    background: #f9f9f9;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 10px 0;
}

.box:hover {
    transform: scale(1.05);
    /* 悬浮放大效果 */
}

.box-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 66.66%;
    /* 内容占盒子宽度的 2/3 */
}

.box-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.box-description {
    font-size: 1rem;
    color: #555;
}

.box-image {
    width: 33.33%;
    /* 图片占盒子宽度的 1/3 */
    height: 100%;
    object-fit: cover;
    border-left: 2px solid #ddd;
}

/* 反转布局：奇数索引的盒子标题和图片反转 */
.reverse-layout .box-content {
    order: 2;
}

.reverse-layout .box-image {
    order: 1;
}
</style>
