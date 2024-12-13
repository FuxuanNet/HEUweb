<template>
    <footer class="footer">
        <div class="footer-content">
            <p>Copyright © 哈尔滨工程大学 版权所有 黑ICP备05000009号 公安网安备2301030200105</p>
            <p>地 址 : 黑龙江省哈尔滨市南岗区南通大街145号 邮编 : 150001 查号台 : 0451-82519222</p>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    background-image: url('../assets/底部1.png');
    /* 设置背景图片路径 */
    background-size:100% 100%;
    /* 背景图填充整个区域 */
    background-position: bottom center;
    /* 居中显示背景图 */
    height: 200px;
    /* 页脚的高度 */
    display: flex;
    justify-content:space-around;
    /* 水平居中内容 */
    align-items:center;
    /* 垂直居中内容 */
    color: white;
    /* 文本颜色 */
}

.footer-content {
    text-align: center;

}

.footer p {
    display: inline;
    margin:0  50px;
    font-size: 16px;
}
@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }

    .footer p {
        font-size: 14px;
        margin: 5px 0;
    }
}

@media (max-width: 480px) {
    .footer p {
        font-size: 10px;
        margin: 3px 3px;
    }
}
</style>
