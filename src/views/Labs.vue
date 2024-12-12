<template>
    <div class="content-section" id="labs">
        <h2>美育实验教学中心实验室</h2>
        <p>先进的实验室设施，助力艺术创作与学习。</p>
    </div>
    <div class="lab-directory">

        <div class="lab-section" v-for="(floors, index) in labData" :key="index">
            <h3>启航活动中心{{ Num[index] }}层</h3>
            <table>
                <thead>
                    <tr>
                        <th>地点</th>
                        <th>实验室</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(room, roomIndex) in floors" :key="roomIndex">
                        <td>{{ room.location }}</td>
                        <td>{{ room.lab }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const Num = ["一","二","三","四"]
const labData = [
    // 启航活动中心一层
    [
        { location: "大厅展厅", lab: "艺术作品展览厅" },
        { location: "剧场", lab: "启航剧场" }
    ],
    // 启航活动中心二层
    [
        { location: "平台", lab: "阳光音乐平台" },
        { location: "201", lab: "小型排练厅" },
        { location: "209/217", lab: "“海之韵”合唱排练室" },
        { location: "219/221", lab: "综合排练厅" },
        { location: "214", lab: "室内乐排练室" },
        { location: "216", lab: "“畅·响”声乐排练室" },
        { location: "220", lab: "“程澈”戏剧排练室" },
        { location: "224", lab: "“息兮”古筝排练室" },
        { location: "210/212", lab: "“西洋/民族管弦乐排练室" }
    ],
    // 启航活动中心三层
    [
        { location: "301", lab: "学生琴房" },
        { location: "302", lab: "学生琴房" },
        { location: "303", lab: "学生琴房" },
        { location: "304", lab: "学生琴房" },
        { location: "305", lab: "学生琴房" },
        { location: "306", lab: "“爱乐”钢琴排练室" },
        { location: "307", lab: "学生琴房" },
        { location: "308", lab: "学生琴房" },
        { location: "309", lab: "学生琴房" },
        { location: "310", lab: "实验设备管理办公室" },
        { location: "311", lab: "地平线视觉设计工作室" },
        { location: "312", lab: "艺术展演服装室" },
        { location: "313", lab: "“语翼”朗诵排练室" },
        { location: "315", lab: "电钢琴教室" },
        { location: "319/321", lab: "启点绘画工作室" },
        { location: "341", lab: "冰雪艺术工作坊" },
        { location: "345", lab: "书法教室" }
    ],
    // 启航活动中心四层
    [
        { location: "书香驿站", lab: "艺术沙龙展演室" }
    ]
]
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
.lab-directory {
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
    /* 限制最大宽度，保持页面不至于过宽 */
}

h2 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.lab-section {
    margin-bottom: 30px;
}

h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

table {
    width: 90%;
    /* 使表格宽度为父容器的90% */
    margin: 0 auto;
    /* 居中表格 */
    border-collapse: collapse;
    /* 合并边框 */
    table-layout: fixed;
    /* 固定列宽，使列宽相等 */
}

th,
td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    /* 使单元格内容居中 */
}

th {
    background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

tbody tr:hover {
    background-color: #f1f1f1;
}

@media (max-width: 768px) {
    table {
        width: 100%;
        /* 在移动端宽度上占满 */
    }
}
</style>