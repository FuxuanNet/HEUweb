<template>
    <div class="container">
        <h2>实验教学中心2019-2024年教学成果获奖</h2>
        <table class="awards-table">
            <thead>
                <tr>
                    <th>教学获奖名称</th>
                    <th>获奖时间</th>
                    <th>颁奖单位</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(award, index) in awards" :key="index">
                    <td>{{ award.name }}</td>
                    <td>{{ award.date }}</td>
                    <td>{{ award.organization }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
// 数据部分：将教学成果获奖数据以数组对象的形式存储
const awards = [
    { name: '黑龙江省级精品在线开放课程《中国民族民间音乐鉴赏》', date: '2019.09', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第三届艺术类高校教学成果展示活动指导教师奖', date: '2023.05', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省首届田家炳杯美育成果展演优秀指导教师奖', date: '2022.11', organization: '黑龙江省教育厅' },
    { name: '黑龙江省级一流课程《平面设计基础》', date: '2023.09', organization: '黑龙江省教育厅' },
    { name: '第三届黑龙江省高校教师教学创新大赛三等奖', date: '2023.05', organization: '黑龙江省教育厅' },
    { name: '第四届黑龙江省高校教师教学创新大赛三等奖', date: '2024.04', organization: '黑龙江省教育厅' },
    { name: '第二届全国高等学校教师工程创客教学能力大赛三等奖', date: '2024.07', organization: '教育部工程创客虚拟教研室' },
    { name: '2024年度哈尔滨工程大学教学成果二等奖', date: '2024.10', organization: '哈尔滨工程大学' },
    { name: '《中华古筝文化》汉语桥线上团组录播优秀课程', date: '2021.11', organization: '教育部中外语言交流中心' },
    { name: '课程思政精品案例《品红色经典 扬民族精神—钢琴协奏曲<保卫黄河>》', date: '2024.02', organization: '哈尔滨工程大学' },
    { name: '课程思政精品案例《中国色彩美学下的红色基因转化》', date: '2024.02', organization: '哈尔滨工程大学' },
    { name: '课程思政精品案例《花香茉莉赞英雄—民歌中的传承》', date: '2024.02', organization: '哈尔滨工程大学' },
    { name: '《合唱基础》课程思政示范课程', date: '2024.02', organization: '哈尔滨工程大学' },
    { name: '哈尔滨工程大学第四届青年教师教学竞赛', date: '2024.01', organization: '哈尔滨工程大学' }
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

.awards-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
    /* 保证列宽一致 */
}

.awards-table th,
.awards-table td {
    padding: 10px;
    text-align: center;
    /* 内容居中 */
    border: 1px solid #444;
}

.awards-table th {
    background-color: #282c3b;
    /* 深灰背景 */
}

.awards-table tr:nth-child(even) {
    background-color: #2f3446;
    /* 每行偶数行背景 */
}

.awards-table tr:nth-child(odd) {
    background-color: #353c52;
    /* 每行奇数行背景 */
}

.awards-table td {
    color: #d4d7e1;
    /* 浅灰色字体 */
}

@media (max-width: 768px) {
    .awards-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
