<template>
    <div class="container">
        <h2>实验教学中心2019-2024年发表学术论文</h2>
        <table class="papers-table">
            <thead>
                <tr>
                    <th>学术论文题目</th>
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
</template>

<script setup>
// 数据部分：将学术论文数据以数组对象的形式存储
const papers = [
    { title: '《钢琴作品<红旗颂>音乐特征及演奏技术分析》', journal: '《黄河之声》', level: '一般', date: '2021.01' },
    { title: '《钢琴作品“浏阳河”的创作特征及作品分析》', journal: '《戏剧之家》', level: '一般', date: '2022.09' },
    { title: '《视觉文化视域下影视色彩叙事审美解析》', journal: '《社会科学》', level: '一般', date: '2022.12' },
    { title: '《中国绘画的艺术精神当代性思辨》', journal: '《文艺评论》', level: '北大中文核心、CSSCI扩展版', date: '2019.05' },
    { title: '《中国民族音乐面临的传承困境级应用对策研究》——评《多元文化交融下的中国民族民间音乐》', journal: '《科技管理研究》', level: 'CSSCI 扩展版', date: '2021年第41卷' },
    { title: '《韩国“真骨”神房曲》', journal: '《北方音乐》', level: '一般', date: '2019.11' },
    { title: '《浅析哈尔滨近代建筑风格的形成与特征》', journal: '工业设计', level: '一般', date: '2022.08' },
    { title: '《理工科高校舞台音乐情景剧探索研究》', journal: '《牡丹》', level: '一般', date: '2019.09' }
];
</script>

<style scoped>
/* 页面背景与字体颜色设置 */
.container {
    padding: 20px;
    background-color: #1a1d2f;
    /* 深蓝背景 */
    color: white;
    font-family: 'Arial', sans-serif;
    border-radius: 8px;
}

h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
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
    border: 1px solid #444;
}

.papers-table th {
    background-color: #282c3b;
    /* 深灰背景 */
}

.papers-table tr:nth-child(even) {
    background-color: #2f3446;
    /* 每行偶数行背景 */
}

.papers-table tr:nth-child(odd) {
    background-color: #353c52;
    /* 每行奇数行背景 */
}

.papers-table td {
    color: #d4d7e1;
    /* 浅灰色字体 */
}

@media (max-width: 768px) {
    .papers-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
