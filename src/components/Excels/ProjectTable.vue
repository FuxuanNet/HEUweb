<template>
    <div class="content-section" id="projects">
        <h2 @click="toggleTableVisibility" class="toggle-title">
            实验教学中心2019-2024年承担课题项目
        </h2>
        <!-- 展开收起图标 -->
        <div class="toggle-container" @click="toggleTableVisibility">
            <i :class="['toggle-icon', isTableVisible ? 'expanded' : '']"></i>
        </div>

        <!-- 展开后的表格内容 -->
        <div v-show="isTableVisible" class="table-container" :style="{ maxHeight: isTableVisible ? '1000px' : '0' }">
            <table class="projects-table">
                <thead>
                    <tr>
                        <th>课题名称</th>
                        <th>起止时间</th>
                        <th>等级</th>
                        <th>授予单位</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(project, index) in projects" :key="index">
                        <td>{{ project.name }}</td>
                        <td>{{ project.duration }}</td>
                        <td>{{ project.level }}</td>
                        <td>{{ project.organization }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isTableVisible = ref(false);  // 控制表格显示状态

// 切换表格显示状态
const toggleTableVisibility = () => {
    isTableVisible.value = !isTableVisible.value;
};

// 数据部分：将承担课题项目数据以数组对象的形式存储
const projects = [
    { name: '黑龙江省教育科学“十三五”规划省专项重点课题《中国传统音乐文化在普通高校的传承与发展研究》', duration: '2020.07', level: '省级', organization: '黑龙江省教育厅教育科学规划领导小组' },
    { name: '黑龙江省艺术科学规划课题《中国民族歌剧伤逝研究》', duration: '2020.12', level: '省级', organization: '黑龙江省文化和旅游厅艺术科学规划领导小组' },
    { name: '黑龙江省教改课题结题《未来技术学院公共艺术教育课程体系的构建与实践—以哈尔滨工程大学为例》', duration: '2022.05-2024.06', level: '省级', organization: '黑龙江省教育厅' },
    { name: '《专业音乐院校一流学科建设的研究与实践》', duration: '2018-2022', level: '省级', organization: '黑龙江省教育厅' },
    { name: '《在研究型工科大学文化素质教育课程中挖掘“工学因素”理论研究与实践探索》', duration: '2022-2023', level: '校级', organization: '哈尔滨工程大学' },
    { name: '《中俄合作交流背景下的钢琴基础教学建设》', duration: '2019-2023', level: '省级', organization: '黑龙江省哲社规划小组' },
    { name: '《基于本科评估下的艺术类课程考核方式改革》', duration: '2017-2019', level: '校级', organization: '哈尔滨工程大学' },
    { name: '《平面设计基础》品牌课项目', duration: '2019-2020', level: '校级', organization: '哈尔滨工程大学' },
    { name: '《慕课时代艺术素质实践教学模式研究与实践》', duration: '2018-2020', level: '省级', organization: '黑龙江省教育厅' },
    { name: '《人文素养类课程特色教学与评价方式的实践研究》', duration: '2014-2020', level: '省级', organization: '黑龙江省高等教育学会' },
    { name: '《线上线下衔接模式在艺术类通识课的有效运用》', duration: '2019-2020', level: '校级', organization: '哈尔滨工程大学' },
    { name: '《翻转课堂背景下艺术通识课线上线下混合式教学设计与实施》', duration: '2021-2023', level: '省级', organization: '黑龙江省教育科学规划小组' },
    { name: '《军工红色文化现代性转化与创新性发展研究》', duration: '2023-2025', level: '省级', organization: '黑龙江省艺术科学规划小组' },
    { name: '《理工科高校素质文化教育中的德育研究与探索——以音乐舞台剧为例》', duration: '2021-2022.12', level: '校级', organization: '哈尔滨工程大学' },
    { name: '《新工科背景下高校美育课程教学模式实践探究——以合唱课为例》', duration: '2023.01-2025.05', level: '省级', organization: '黑龙江省教育厅' },
    { name: '《互联网+红色音乐作品的思政教育功能及其传播策略研究》', duration: '2024.05-2026.05', level: '省级', organization: '黑龙江省文化厅' },
    { name: '主持《手风琴室内乐演奏技巧研究》', duration: '2023.07-2025.07', level: '省级', organization: '黑龙江省艺术科学规划领导小组' }
];

</script>

<style scoped>
/* 样式 */
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
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #222;

    cursor: pointer;
}

.toggle-container {
    margin: 10px auto;
    cursor: pointer;
    display:  flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: relative;
}

.toggle-container i {
    width: 20px;
    height: 20px;
    border-left: 3px solid #007BFF;
    border-bottom: 3px solid #007BFF;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
}

.toggle-container .expanded {
    transform: rotate(180deg);
}

.table-container {
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    overflow: hidden;
    max-height: 0;
    padding: 0 15px;
    background-color: #f7f7f7;
    border-radius: 5px;
}

/* 页面背景与字体颜色设置 */
.container {
    padding: 20px;
    background-color: #f9f9f9;
    /* 浅灰背景 */
    color: #333;
    font-family: 'Arial', sans-serif;
    border-radius: 8px;
}

h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #222;
}

.projects-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
    /* 保证列宽一致 */
}

.projects-table th,
.projects-table td {
    padding: 10px;
    text-align: center;
    /* 内容居中 */
    border: 1px solid #ccc;
}

.projects-table th {
    background-color: #f2f2f2;
    /* 浅灰背景 */
    color: #555;
    /* 深灰背景 */
}

.projects-table tr:nth-child(even) {
    background-color: #ffffff;
    /* 每行偶数行背景 */
}

.projects-table tr:nth-child(odd) {
    background-color: #f7f7f7;
    /* 每行奇数行背景 */
}

.projects-table td {
    color: #333;
    /* 浅灰色字体 */
}

.projects-table tr:hover {
    background-color: #e9e9e9;
}

@media (max-width: 768px) {
    .projects-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
