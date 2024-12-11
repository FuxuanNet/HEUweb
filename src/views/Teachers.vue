<template>
    <div class="teachers-container">
        <div class="teacher-box" v-for="(teacher, index) in teachers" :key="index">
            <div class="teacher-info">
                <!-- 头像和姓名横向排列 -->
                <img :src="getAvatarUrl(teacher.avatar)" alt="照片" class="teacher-avatar" />
                <h3 class="teacher-name">{{ teacher.name }}</h3>
            </div>
            <!-- 详细介绍 -->
            <div v-if="teacher.showDetails" class="teacher-details" v-html="teacher.details"></div>
            <!-- 按钮放在右下角，带立体效果 -->
            <button @click="toggleDetails(index)" class="view-details-btn">
                查看详细/简介
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// 定义教师数据
const teachers = ref([
    {
        name: '杜兆群', avatar: '杜兆群.png', details: `<div>
  <p><strong>哈尔滨工程大学机电工程学院工业设计专业教师，副教授。</strong></p>
  <p>大学生艺术团冰雪艺术工作坊指导教师。</p>
  <p><strong>黑龙江省美术家协会理事；</strong></p>
  <p><strong>黑龙江省美术家协会工业设计艺术协会主任；</strong></p>
  <p><strong>黑龙江省设计协会冰雪艺术分会副会长；</strong></p>
  <p>驻哈尔滨冰雪大世界股份有限公司技术顾问。</p>
  <ul>
    <li>第十四届黑龙江省美术作品展，“冰箱中的花式透明冰制造设备”获银奖;</li>
    <li>2019 年，全国优秀工业设计奖金奖评选，产品“花式调酒评球”入围;</li>
    <li>2017 年，美国百威国际冰雪艺术节，作品“美人鱼”获得最佳艺术家奖、第一名;</li>
    <li>2012 年，法国卢瓦尔国际冰雪节，作品“战争与和平”获得第一名;</li>
    <li>2009 年，美国百威国际冰雪艺术节，作品“春天脚步”获最佳艺术家奖、第二名;</li>
    <li>2013 年，意大利圣坎迪多，国际雪雕艺术竞赛，作品“潘多拉的盒子”获得二名;</li>
    <li>2018 年，日本札幌国际雪节，作品“风调雨顺”获得第三名。</li>
  </ul>
</div>
`, showDetails: false
    },
    { name: '关丽娟', avatar: '关丽娟.png', details: '', showDetails: false },
    { name: '郭实', avatar: '郭实.png', details: '', showDetails: false },
    { name: '李晓民', avatar: '李晓民.png', details: '', showDetails: false },
    { name: '刘蓓蓓', avatar: '刘蓓蓓.png', details: '', showDetails: false },
    { name: '刘玢', avatar: '刘玢.png', details: '', showDetails: false },
    { name: '鹿洋', avatar: '鹿洋.png', details: '', showDetails: false },
    { name: '孙海', avatar: '孙海.png', details: '', showDetails: false },
    { name: '孙南航', avatar: '孙南航.png', details: '', showDetails: false },
    { name: '王婧', avatar: '王婧.png', details: '', showDetails: false },
    { name: '王维', avatar: '王维.png', details: '', showDetails: false },
    { name: '杨点墨', avatar: '杨点墨.png', details: '', showDetails: false },
    { name: '赵路辉', avatar: '赵路辉.png', details: '', showDetails: false },
]);

// 获取头像图片的 URL
const getAvatarUrl = (avatar) => {
    // 动态加载头像图片
    return new URL(`../assets/avatars/${avatar}`, import.meta.url).href;
};

// 加载教师详情
const loadTeacherDetails = (index) => {
    const teacher = teachers.value[index];
    // teacher.details = `这是 ${teacher.name} 的详细介绍。`;  // 示例内容
};
// const getAvatarUrl = (avatar) => {
//     return new URL(`../assets/avatars/${avatar}`, import.meta.url).href;
// };


// 切换显示详细信息
const toggleDetails = (index) => {
    const teacher = teachers.value[index];
    teacher.showDetails = !teacher.showDetails;
};
</script>

<style scoped>
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

.teachers-container {
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    /* 自动调整列数和宽度 */
    gap: 20px;
}
.teacher-box {
    position: relative;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 350px; /* 设置固定高度，可以根据内容调整 */
}

.teacher-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.teacher-info {
    display: flex;
    align-items: center;
    gap: 15px;
    /* 头像和姓名间距 */
    margin-bottom: 15px;
}

.teacher-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.teacher-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.teacher-details {
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin-top: 10px;
}

.view-details-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: #0a223b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-details-btn:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
}

/* 适应不同屏幕的布局 */
@media (min-width: 1200px) {
    .teachers-container {
        grid-template-columns: repeat(4, 1fr);
        /* 大屏幕时每行显示4个 */
    }
}

@media (max-width: 1199px) and (min-width: 800px) {
    .teachers-container {
        grid-template-columns: repeat(3, 1fr);
        /* 中等屏幕时每行显示3个 */
    }
}

@media (max-width: 799px) {
    .teachers-container {
        grid-template-columns: 1fr;
        /* 小屏幕时每行显示1个 */
    }

    .teacher-box {
        height: auto;
        /* 小屏幕时自动调整高度 */
    }
}

/* .teacher-details {
    padding: 20px;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    color: #333;
    line-height: 1.6;
} */

.teacher-details h3 {
    color: #081e36;
}

</style>
