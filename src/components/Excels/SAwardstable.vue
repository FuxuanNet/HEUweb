<template>
    <div class="content-section" id="awards">
        <h2 @click="toggleTableVisibility" class="toggle-title">
            实验教学中心2019-2024年指导学生艺术实践获奖
        </h2>
        <!-- 展开收起图标 -->
        <div class="toggle-container" @click="toggleTableVisibility">
            <i :class="['toggle-icon', isTableVisible ? 'expanded' : '']"></i>
        </div>

        <!-- 展开后的表格内容 -->
        <div v-show="isTableVisible" class="table-container" :style="{ maxHeight: isTableVisible ? '1000px' : '0' }">
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
    </div>
</template>


<script setup>
import { ref } from 'vue';

const isTableVisible = ref(false);

const toggleTableVisibility = () => {
    isTableVisible.value = !isTableVisible.value;
};

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
    { name: '黑龙江省首届“田家炳”杯大学生美育成果展演活动美术类甲组《战争与和平》', date: '2022.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省首届“田家炳”杯大学生美育成果展演活动美术类甲组《逐梦飞天》', date: '2022.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省首届“田家炳”杯大学生美育成果展演活动美术类甲组《只此中国》', date: '2022.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '第三届全省艺术类高校教学成果展示活动设计类《共赴未来》', date: '2023.05', rank: '三等奖', organization: '黑龙江省文旅厅' },
    { name: '第四届全省艺术类高校教学成果展示活动设计类《校园十二月》', date: '2024.01', rank: '三等奖', organization: '黑龙江省文旅厅' },
    { name: '第四届全省艺术类高校教学成果展示活动设计类《顾菟弓鸣》', date: '2024.01', rank: '三等奖', organization: '黑龙江省文旅厅' },
    { name: '第四届全省艺术类高校教学成果展示活动设计类《青年，与国同行》', date: '2024.01', rank: '优秀奖', organization: '黑龙江省文旅厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《叩问苍穹》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《少年强》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《丹心铸剑》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《青年，与国同行》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《踏舟逐梦》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动设计甲组《石榴花开，籽籽同心》', date: '2024.02', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第五届高校艺术类教学成果展示活动设计类《红色校园IP形象设计—工小橙》', date: '2024.01', rank: '三等奖', organization: '黑龙江省文旅厅' },
    { name: '第四届黑龙江省艺术类高校教学成果展示活动声乐类学生组《沂蒙山永远的爹娘》', date: '2024.01', rank: '三等奖', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《沂蒙山永远的爹娘》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《敕勒歌》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《定军山》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《想你的365天》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动集体声乐类甲组《光芒》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《多情的土地》', date: '2024.02', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动个人声乐类甲组《灯火里的中国》', date: '2024.02', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演活动集体戏剧类甲组《天边有颗闪亮的星》', date: '2024.02', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '第九届全省声乐、器乐比赛流行唱法青年组', date: '2024.11', rank: '三等奖', organization: '黑龙江省文化和旅游厅' },
    { name: '第五届黑龙江省艺术类高校教学成果展示活动', date: '2024.10', rank: '优秀奖', organization: '黑龙江省文化和旅游厅' },
    { name: '第五届黑龙江省艺术类高校教学成果展示活动', date: '2024.10', rank: '优秀奖', organization: '黑龙江省文化和旅游厅' },
    { name: '第五届黑龙江省艺术类高校教学成果展示活动', date: '2024.10', rank: '优秀奖', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省第六届大学生艺术展演艺术表演类声乐甲组《奉献》《黑龙江的波涛》', date: '2020.11', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演艺术表演类器乐甲组《阿里郎》', date: '2020.11', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演艺术表演类器乐甲组《人民海军向前进》', date: '2020.11', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演优秀案例', date: '2020.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '全国第六届大学生艺术展演器乐甲组《阿里郎》', date: '2021.03', rank: '三等奖', organization: '教育部' },
    { name: '黑龙江省第七届大学生艺术展演集体声乐类甲组《大漠之夜》《时代英雄》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演集体器乐类甲组《小河淌水》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演集体器乐类甲组《梁祝化蝶》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演个人器乐类甲组《草原英雄小姐妹》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演个人器乐类甲组《塞上铁骑》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演个人器乐类甲组《白毛女》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演《咏荷》', date: '2020.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第六届大学生艺术展演《楚忧》', date: '2020.11', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '全国第七届大艺展艺术表演类集体节目《入画江南》', date: '2024.07', rank: '三等奖', organization: '全国第七届大学生艺术展演活动组织委员会' },
    { name: '黑龙江省第七届大学生艺术展演《入画江南》', date: '2024.02', rank: '一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演《风声》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演《唐印》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演《长相思》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演《簪花记》', date: '2024.02', rank: '二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演舞蹈《扇骨》', date: '2024.02', rank: '三等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第五届高校艺术类教学成果展示活动《雨后》', date: '2024.10', rank: '优秀奖', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省第五届高校艺术类教学成果展示活动《锭步桥》', date: '2024.10', rank: '优秀奖', organization: '黑龙江省文化和旅游厅' },
    { name: '第三届黑龙江省艺术类高校教学成果展示活动绘画类《故园之恋》', date: '2023.05', rank: '优秀奖（唯一）', organization: '黑龙江省文化和旅游厅' },
    { name: '第三届黑龙江省艺术类高校教学成果展示活动绘画类《故乡的夏天》', date: '2023.05', rank: '优秀奖（唯一）', organization: '黑龙江省文化和旅游厅' },
    { name: '第三届黑龙江省艺术类高校教学成果展示活动绘画类《诗意的栖夕》', date: '2023.05', rank: '优秀奖（唯一）', organization: '黑龙江省文化和旅游厅' },
    { name: '第三届黑龙江省艺术类高校教学成果展示活动绘画类《红十月》', date: '2023.05', rank: '优秀奖（唯一）', organization: '黑龙江省文化和旅游厅' },
    { name: '第三届黑龙江省艺术类高校教学成果展示活动绘画类《山村》', date: '2024.01', rank: '优秀奖（唯一）', organization: '黑龙江省文化和旅游厅' },
    { name: '黑龙江省教育厅关工委2024年“读懂中国”活动《听海扬帆》', date: '2024.11', rank: '省级一等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演表演类甲组话剧《两老办院》', date: '2023.12', rank: '省级二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演表演类甲组话剧《听海杨帆》', date: '2023.12', rank: '省级二等奖', organization: '黑龙江省教育厅' },
    { name: '黑龙江省第七届大学生艺术展演大学生艺术实践工作坊类甲组《冰雪艺术工作坊》', date: '2024.02', rank: '甲组一等奖', organization: '黑龙江省教育厅' },
    { name: '全国第七届大学生艺术展演活动大学生艺术实践工作坊《哈尔滨工程大学冰雪艺术工作坊》', date: '2024.07', rank: '一等奖', organization: '全国第七届大学生艺术展演活动组织委员会' }

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
    overflow: auto;
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
    border: 1px solid #ccc;
}

.awards-table th {
    background-color: #f2f2f2;
    /* 浅灰背景 */
    color: #555;
}

.awards-table tr:nth-child(even) {
    background-color: #ffffff;
    /* 每行偶数行背景 */
}

.awards-table tr:nth-child(odd) {
    background-color: #f7f7f7;
    /* 每行奇数行背景 */
}

.awards-table td {
    color: #333;
    /* 深灰色字体 */
}

@media (max-width: 768px) {
    .awards-table {
        font-size: 14px;
        /* 小屏幕字体更小 */
    }
}
</style>
