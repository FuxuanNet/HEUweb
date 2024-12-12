<template>
  <div class="container">
    <h2>实验教学中心2019-2024年科研获奖情况</h2>
    <table class="awards-table">
      <thead>
        <tr>
          <th>获奖名称</th>
          <th>获奖时间</th>
          <th>等级（排名）</th>
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
// 数据部分：将科研获奖数据以数组对象的形式存储
const awards = [
  { name: '第三届黑龙江省艺术类高校教学成果展声乐类《我爱这土地》', date: '2023.05', rank: '一等奖 唯一', organization: '黑龙江省文化和旅游厅' },
  { name: '黑龙江省优秀艺术科研成果《新媒体环境下视觉传达设计思路研究》', date: '2021.08', rank: '三等奖，唯一', organization: '黑龙江省文化和旅游厅' },
  { name: '第三届黑龙江省艺术类高校教学成果展绘画类《停炮》', date: '2023.05', rank: '三等奖，唯一', organization: '黑龙江省文化和旅游厅' }
];
</script>

<style scoped>
/* 页面背景与字体颜色设置 */
.container {
  padding: 20px;
  background-color: #1a1d2f; /* 深蓝背景 */
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
  table-layout: fixed; /* 保证列宽一致 */
}

.awards-table th, .awards-table td {
  padding: 10px;
  text-align: center; /* 内容居中 */
  border: 1px solid #444;
}

.awards-table th {
  background-color: #282c3b; /* 深灰背景 */
}

.awards-table tr:nth-child(even) {
  background-color: #2f3446; /* 每行偶数行背景 */
}

.awards-table tr:nth-child(odd) {
  background-color: #353c52; /* 每行奇数行背景 */
}

.awards-table td {
  color: #d4d7e1; /* 浅灰色字体 */
}

@media (max-width: 768px) {
  .awards-table {
    font-size: 14px; /* 小屏幕字体更小 */
  }
}
</style>
