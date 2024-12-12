<template>
    <div class="content-section" id="books">
        <h2 @click="toggleTableVisibility" class="toggle-title">
            实验教学中心2019-2024年出版教材及书籍
        </h2>
        <!-- 展开收起图标 -->
        <div class="toggle-container" @click="toggleTableVisibility">
            <i :class="['toggle-icon', isTableVisible ? 'expanded' : '']"></i>
        </div>

        <!-- 展开后的表格内容 -->
        <div v-show="isTableVisible" class="table-container" :style="{ maxHeight: isTableVisible ? '1000px' : '0' }">
            <table class="books-table">
                <thead>
                    <tr>
                        <th>教材或书籍名称</th>
                        <th>主编姓名</th>
                        <th>本人排名</th>
                        <th>出版社及出版时间</th>
                        <th>该教材或书籍获奖情况</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in books" :key="index">
                        <td>{{ book.name }}</td>
                        <td>{{ book.editor }}</td>
                        <td>{{ book.rank }}</td>
                        <td>{{ book.publisher }}</td>
                        <td>{{ book.award }}</td>
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
// 数据部分：将教材数据以数组对象的形式存储
const books = [
    { name: '《音乐基本常识概论》', editor: '刘蓓蓓', rank: '第一主编', publisher: '黑龙江教育出版社 2020.12', award: '2019年度校级教材建设' },
    { name: '《音乐艺术与实践创新》', editor: '张蓓蓓', rank: '鹿洋排名第二', publisher: '吉林科学技术出版社 2020.09', award: '无' },
    { name: '《中国音乐文化艺术与教育学研究》', editor: '张潇潇', rank: '王维排名第二', publisher: '中国纺织出版社 2021.09', award: '无' },
    { name: '《音乐鉴赏》', editor: '李红梅', rank: '王维排名第二', publisher: '西北工业大学出版社 2022.03', award: '普通高等教育“十三五”规划教材' },
    { name: '《平面设计基础与PHOTOSHOP实战应用》', editor: '王婧', rank: '第一主编', publisher: '科学出版社 2022.10', award: '无' },
    { name: '《中国手风琴发展史》', editor: '郭实', rank: '第一主编', publisher: '哈尔滨工程大学出版社 2019.12', award: '无' },
    { name: '《女性主义音乐研究》', editor: '郭实', rank: '第一主编', publisher: '哈尔滨出版社 2023.09', award: '无' },
    { name: '《声乐进阶教程》', editor: '刘玢', rank: '第一主编', publisher: '人民邮电出版社 2021.08', award: '无' }
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
    /* 深蓝背景 */
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

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
    /* 保证列宽一致 */
}

.books-table th,
.books-table td {
    padding: 10px;
    text-align: center;
    /* 内容居中 */
    border: 1px solid #ccc;
}

.books-table th {
    background-color: #f2f2f2;
    /* 深灰背景 */
            color: #555;
}

.books-table tr:nth-child(even) {
    background-color: #ffffff;
    /* 每行偶数行背景 */
}

.books-table tr:nth-child(odd) {
    background-color: #f7f7f7;
    /* 每行奇数行背景 */
}

.books-table td {
    color: #333;
    /* 浅灰色字体 */
}

@media (max-width: 768px) {
    .books-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
