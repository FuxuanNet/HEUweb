<template>
    <div class="content-section" id="papers">
        <h2 @click="toggleTableVisibility" class="toggle-title">
            实验教学中心2019-2024年发表教学论文
        </h2>
        <!-- 展开收起图标 -->
        <div class="toggle-container" @click="toggleTableVisibility">
            <i :class="['toggle-icon', isTableVisible ? 'expanded' : '']"></i>
        </div>

        <!-- 展开后的表格内容 -->
        <div v-show="isTableVisible" class="table-container" :style="{ maxHeight: isTableVisible ? '1000px' : '0' }">
            <table class="papers-table">
                <thead>
                    <tr>
                        <th>教学论文题目</th>
                        <th>期刊名称</th>
                        <th>级别</th>
                        <th>发表时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(paper, index) in papers" :key="index">
                        <td>{{ paper.title }}</td>
                        <td>{{ paper.journal }}</td>
                        <td>{{ paper.level }}</td>
                        <td>{{ paper.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isTableVisible = ref(false);

const toggleTableVisibility = () => {
    isTableVisible.value = !isTableVisible.value;
};

// 数据部分：将论文数据以数组对象的形式存储
const papers = [
    { title: '《多媒体在高校音乐教学中的应用探微》', journal: '《人物画报》', level: '一般', date: '2020.02' },
    { title: '《探讨高校开展音乐欣赏课的重要性》', journal: '《看世界》理论研究', level: '一般', date: '2020.12' },
    { title: '《以音乐舞台剧培养高校学生核心素养研究》', journal: '《颂雅风》', level: '一般', date: '2022.03' },
    { title: '《普通高校美育工作中音乐教育实施路径分析》', journal: '《中国文艺家》', level: '一般', date: '2022.08' },
    { title: '《诗乐教育的理念及现代意义》', journal: '《语文建设》', level: '北大中文核心', date: '2022.08' },
    { title: '《大学艺术教育问题探索与实践路径——评<艺术教育的认知原理>》', journal: '《中国高校科技》', level: '北大中文核心', date: '2022.09' },
    { title: '《新时代音乐教育路径研究》', journal: '《新闻爱好者》', level: '北大中文核心；CSSCI扩展版', date: '2022.12' },
    { title: '《浅谈高校音乐教育中的民族音乐教育》', journal: '《参花》', level: '一般', date: '2019.01' },
    { title: '《多元文化背景下高校音乐教育中民族音乐的传承》', journal: '《戏剧之家》', level: '一般', date: '2021.09' },
    { title: '《论通识教育理念下的高校公共艺术教育》', journal: '《山西青年》', level: '一般', date: '2021.11' },
    { title: '《新时期高校美育课程教学现状与发展趋势研究》', journal: '《教育理论与实践》', level: '北大中文核心', date: '2023.11' },
    { title: '《新工科背景下高校合唱课教学策略探讨》', journal: '《山西青年》', level: '一般', date: '2023.12' },
    { title: '《新时代下高校舞蹈教育教学模式探索与实践》', journal: '《中国高校科技》', level: '北大中文核心', date: '2023.02' },
    { title: '《高校公共舞蹈艺术教育的发展与挑战探究》', journal: '《新课程教学》', level: '一般', date: '2022.12' },
    { title: '《浅谈高校舞蹈教学中的呼吸训练》', journal: '《人物画报》', level: '一般', date: '2020.02' },
    { title: '《以学生为主体的舞蹈教学在高校舞蹈教学中的创新思考》', journal: '《山西青年》', level: '一般', date: '2019.02' },
    { title: '《基于MOOC平台建设艺术素质教育的点、线、面》', journal: '《大众文艺》', level: '一般', date: '2021.01' },
    { title: '《高校艺术通识课程线上线下混合式教学设计探究》', journal: '《中国教育书刊》', level: 'CSSCI', date: '2022.01' },
    { title: '《设计基础课线上教学应用实践研究》', journal: '《绿色包装》', level: '一般', date: '2022.04' },
    { title: '《“双减”政策下校外素质教育的现状与对策分析》', journal: '《教育》', level: '一般', date: '2022.09' },
    { title: '《建筑美学与艺术设计融合路径》', journal: '《建筑结构》', level: '核心', date: '2023.08' },
    { title: '《多媒体技术在艺术素质教育中的应用》', journal: '《畅谈》', level: '一般', date: '2022.02' },
    { title: '《东北渔猎民族音乐舞蹈艺术中动物形象及其在教学上的展示》', journal: '《黑龙江民族丛刊》', level: 'CSSCI 扩展版', date: '2022年第1期' },
    { title: '《古筝专业教学有效性的提升策略》——评《古筝艺术理论与实践》', journal: '《中国教育学刊》', level: 'CSSCI', date: '2021.04' },
    { title: '《论音乐教育对大学生素质培养的作用和意义-评《音乐教育协同理论与素质培养》》', journal: '《新闻爱好者》', level: '北大中文核心；CSSCI扩展版', date: '2019.09' },
    { title: '《高校美育课程“西方音乐鉴赏”教学改革探索》', journal: '《中国民族博览》', level: '一般', date: '2020.11' },
    { title: '《高校“西方音乐鉴赏课”特色化建设研究》', journal: '《当代音乐》', level: '一般', date: '2024.02' },
    { title: '《高校音乐专业课程思政教学改革探讨》', journal: '《科技信息》', level: '一般', date: '2021.12' },
    { title: '《音乐舞台剧在高校德育教育中的推动作用》', journal: '《戏剧之家》', level: '一般', date: '2021.04' },
    { title: '《传统音乐文化融入高校音乐教育中的传承与发展——评《高校音乐教育创新与发展研究》》', journal: '《新闻爱好者》', level: '北大中文核心；CSSCI扩展版', date: '2023.01' }
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
    display: flex;
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

.papers-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
    /* 保证列宽一致 */
}

.papers-table th,
.papers-table td {
    padding: 10px;
    text-align: center;
    /* 内容居中 */
    border: 1px solid #ccc;
}

.papers-table th {
    background-color: #f2f2f2;
        /* 浅灰背景 */
        color: #555;
    /* 深灰背景 */
}

.papers-table tr:nth-child(even) {
    background-color: #ffffff;    /* 每行偶数行背景 */
}

.papers-table tr:nth-child(odd) {
    background-color: #f7f7f7;    /* 每行奇数行背景 */
}

.papers-table td {
    color: #333;    /* 浅灰色字体 */
}

@media (max-width: 768px) {
    .papers-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
