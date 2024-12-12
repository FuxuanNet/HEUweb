<template>
    <div class="container">
        <h2>实验教学中心2019-2024年指导学生艺术实践获奖</h2>
        <table class="awards-table">
            <thead>
                <tr>
                    <th>奖项名称</th>
                    <th>获奖时间</th>
                    <th>等级</th>
                    <th>颁奖单位</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(award, index) in awards" :key="index">
                    <td>{{ award.name }}</td>
                    <td>{{ award.date }}</td>
                    <td>{{ award.rank }}</td>
                    <td>{{ award.organization }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
// 数据部分：将指导学生艺术实践获奖数据以数组对象的形式存储
const awards = [
    { name: '第三届黑龙江省艺术类高校教学成果展示活动器乐键盘类《南海小哨兵》', date: '2023.05', rank: '二等奖', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省第七届大艺展个人器乐类甲组《山丹丹开花红艳艳》', date: '2024.06', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大艺展个人器乐类甲组《南海小哨兵》', date: '2024.06', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大艺展个人器乐类甲组《我的祖国》', date: '2024.06', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大艺展个人声乐类甲组《敕勒歌》', date: '2024.06', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第五届高校艺术类教学成果展示器乐键盘类《浏阳河》', date: '2024.10', rank: '三等奖', organization: '黑龙江省文化和旅游厅' },
    { name: '全国第七届大学生艺术展演《云之南》', date: '2024.07', rank: '国家三等奖', organization: '全国第七届大学生艺术展演活动组织委员会' },
    { name: '黑龙江省第七届大学生艺术展演《云之南》', date: '2024.02', rank: '黑龙江省一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演《盛世国乐》', date: '2020.11', rank: '黑龙江省二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演活动设计类《黑夜下的守望者》', date: '2020.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省首届“田家炳”杯大学生美育成果展演活动美术类甲组《异籽同心》', date: '2022.11', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省首届“田家炳”杯大学生美育成果展演活动美术类甲组《共赴未来》', date: '2022.11', rank: '二等奖', organization: '黑龙江省教育厅' },
    // 更多数据...
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
