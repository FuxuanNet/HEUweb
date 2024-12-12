<template>
    <div class="content-section" id="teamstructure">
        <h2>国家大学生文化素质教育基地美育教学团队</h2>
        <p>团队由经验丰富的教师和艺术家组成，为学生提供专业指导与支持。</p>
        <div class="toggle-container" @click="toggleSection('teamstructure')">
            <i :class="['toggle-icon', isOpen.teamstructure ? 'expanded' : '']"></i>
        </div>
        <div :class="['content-details', { expanded: isOpen.teamstructure }]"
            :style="{ maxHeight: isOpen.teamstructure ? '1000px' : '0' }">
            <TeamsTables />
        </div>
    </div>

    <div class="content-section" id="teachingresources">
        <h2>师资力量</h2>
        <p>拥有一支专业、富有经验的教师团队，为学生提供高质量的艺术教育。</p>
        <div class="toggle-container" @click="toggleSection('teachingresources')">
            <i :class="['toggle-icon', isOpen.teachingresources ? 'expanded' : '']"></i>
        </div>
        <div :class="['content-details', { expanded: isOpen.teachingresources }]"
            :style="{ maxHeight: isOpen.teachingresources ? '1000px' : '0' }">
            <div class="teachers-container">
                <div class="teacher-box" v-for="(teacher, index) in teachers" :key="index"
                    :class="{ 'expanded': teacher.showDetails }">
                    <div class="teacher-info">
                        <img :src="getAvatarUrl(teacher.avatar)" alt="照片" class="teacher-avatar" />
                        <h3 class="teacher-name">{{ teacher.name }}</h3>
                    </div>
                    <div v-if="teacher.showDetails" class="teacher-details" v-html="teacher.details"></div>
                    <button @click="toggleDetails(index)" class="view-details-btn">
                        查看详细/简介
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TeamsTables from '../components/Excels/TeamsTable.vue'
import { ref } from 'vue';

// 定义教师数据
const teachers = ref([
    {
        name: '杜兆群', avatar: '杜兆群.png', details: `<div>
  <p>哈尔滨工程大学机电工程学院工业设计专业教师，副教授。</p>
  <p>大学生艺术团冰雪艺术工作坊指导教师。</p>
  <p>黑龙江省美术家协会理事；</p>
  <p>黑龙江省美术家协会工业设计艺术协会主任；</p>
  <p>黑龙江省设计协会冰雪艺术分会副会长；</p>
  <p>驻哈尔滨冰雪大世界股份有限公司技术顾问。</p>
  <ul>
    <li>第十四届黑龙江省美术作品展，“冰箱中的花式透明冰制造设备”获银奖;</li>
    <li>2019 年，全国优秀工业设计奖金奖评选，产品“花式调酒评球”入围;</li>
    <li>2017 年，美国百威国际冰雪艺术节，作品“美人鱼”获得最佳艺术家奖、第一名;</li>
    <li>2012 年，法国卢瓦尔国际冰雪节，作品“战争与和平”获得第一名;</li>
    <li>2009 年，美国百威国际冰雪艺术节，作品“春天脚步”获最佳艺术家奖、第二名;</li>
    <li>2013 年，意大利圣坎迪多，国际雪雕艺术竞赛，作品“潘多拉的盒子”获得二名;</li>
    <li>2018 年，日本札幌国际雪节，作品“风调雨顺”获得第三名。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '关丽娟', avatar: '关丽娟.png', details: `<div>
  <p>哈尔滨工程大学国家大学生素质教育基地古筝教师，副教授。</p>
  <p>黑龙江省古筝学会理事；</p>
  <p>我校大学生艺术团“息兮”古筝团指导教师。</p>
  <ul>
    <li>多次荣获全国大学生艺术展演优秀指导教师;</li>
    <li>2006年黑龙江省民族器乐大赛一等奖;</li>
    <li>2007年黑龙江省第十届“群星奖”比赛金奖;</li>
    <li>全国民族乐器演奏水平考级方面做出突出贡献，多次被评为优秀指导教师;</li>
    <li>黑龙江省音乐家协会优秀指导教师;</li>
    <li>荣获黑龙江省艺术教育成果教师组二等奖;</li>
    <li>多次荣获校优秀主讲教师三等奖;</li>
    <li>2007年赴莫斯科参加俄罗斯“中国年”开幕式，为两国元首演奏;</li>
    <li>自2013年起，指导学生多次参加大学生艺术展演，荣获国家三等奖和省级一、二、三等奖等;</li>
    <li>作为《中华古筝文化》课程负责人，该课程被评为教育部一流课程，入选教育部“汉语桥”国际中文教育视频课程资源库。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '郭实', avatar: '郭实.png', details: `<div>
  <p>校国家大学生文化素质教育基地美育教研室器乐专业教师，副教授。</p>
  <p>黑龙江省音乐家协会手风琴专业委员会副秘书长。</p>
  <p>黑龙江省普通高校艺术类术科统一考试评委会委员；</p>
  <p>黑龙江省音乐家协会手风琴考级评委。</p>
  <ul>
    <li>荣获黑龙江省大学生艺术展演优秀指导教师等多项荣誉称号。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '李晓民', avatar: '李晓民.png', details: `<div>
  <p>毕业于哈尔滨师范大学艺术学院/油画专业/文学学术硕士</p>
  <p>哈尔滨工程大学副教授/硕士生导师</p>
  <p>现任黑龙江省美术家协会油画艺术委员会副秘书长</p>
  <p>黑龙江省油画学会副秘书长/常务理事</p>
  <p>现为中国美术家协会会员</p>
  <p>黑龙江省美术家协会会员</p>
</div>
`, showDetails: false
    },
    {
        name: '刘蓓蓓', avatar: '刘蓓蓓.png', details: `<div>
  <p>校本科生院国家大学生文化素质教育基地美育教研室主任，副教授，研究方向——大学美育与钢琴教育。</p>
  <p>全国普通高等学校本科教育教学评估专家；</p>
  <p>中国教育学会音乐教育专业委员会会员；</p>
  <p>黑龙江省普通高校艺术类术科统考评委会委员；</p>
  <p>黑龙江省音乐家协会钢琴分会理事。</p>
  <ul>
    <li>连续多年荣获哈尔滨工程大学“本科教学优秀奖”以及“通识课程优秀主讲教师”。</li>
    <li>获教育教学奖励55次，其中优秀主讲教师及教学竞赛11次，省级以上科研成果奖15次，校级、省级优秀教学成果奖4次;</li>
    <li>指导学生演奏省级以上获奖20余次;</li>
    <li>国家级核心期刊及各级期刊发表论文20余篇，主编及参编教材及著作5部;</li>
    <li>主持及参与科研课题30余项。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '刘玢', avatar: '刘玢.png', details: `<div>
  <p>哈尔滨工程大学本科生院美育教研室教师，黑龙江省音乐家协会会员。</p>
  <p>开设通识教育选修课程：《歌剧艺术鉴赏》、《听觉与视唱基础》、《声乐理论与表演》，并担任校级核心课程《基础乐理》、未来技术学院《基础乐理与视唱练耳》课程主讲教师之一。</p>
  <ul>
    <li>发表核心论文、省级论文十余篇、著作2部、参与主持省级教改课题、校级教改课题、中央高校基金课题等。</li>
    <li>曾获得第四届国际华人艺术节声乐国际大赛——美声组银奖；</li>
    <li>第三届全省艺术类高校教学成果展示活动——声乐一等奖；</li>
    <li>第七届黑龙江省音乐大赛——美声组一等奖；</li>
    <li>首届黑龙江省艺术教育成果调演评比——美声组二等奖；</li>
    <li>哈尔滨工程大学第四届青年教师教学竞赛文科组二等奖。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '鹿洋', avatar: '鹿洋.png', details: `<div>
  <p>中国舞蹈家协会会员，黑龙江省舞蹈家协会会员，中国舞蹈家协会中国舞考级考官。</p>
  <ul>
    <li>第24届世界大学生冬季运动会编导；</li>
    <li>中央电视台心连心赴大庆慰问演出编导；</li>
    <li>第七届曲艺牡丹奖颁奖晚会编导；</li>
    <li>编创指导的作品获得全国大学生艺术展演国家级二等奖一项，三等奖一项，及其他国家级、省级奖项30余项。</li>
    <li>参编著作三部，核心及省级文章10余篇，主持参与科研立项10余项。</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '孙海', avatar: '孙海.png', details: `<div>
  <p>哈尔滨工程大学，副教授，博士生导师，本科生院街舞团负责教师。霹雳舞舞龄 20 余年，哈尔滨 Old School 团队 OF (THE ODDITY FAMILY) 成员。</p>
  <p>2005 首届 CSC 全国大学生舞蹈比赛街舞组冠军，2004-2007 动感地带大学生街舞比赛，黑龙江省赛区冠军，Freestyle Session 密西根区团队四强等比赛。</p>
  <p>2009 年哈尔滨工程大学力学博士毕业; 2017 年担任 ASME (美国机械工程师协会)，海洋风电分会主席。</p>
  <p>2013-2018 年密西根大学安娜堡 (University of Michigan, Ann Arbor)，博士后; Vortex Hydro Energy Inc.高级工程师。</p>
  <p>研究方向为系统可靠性与风险分析，流体力学、海洋工程、振动控制、耦合分析动力学。</p>
  <p>近 5 年以第一作者及第一通讯作者发表 SCI 检索论文 30 余篇 (其中中科院一区论文 14 篇)，发明专利 4 项。</p>
  <p>电话：13936561523</p>
  <p>邮箱：sunhai@hrbeu.edu.cn</p>
  <p>个人主页：<a href="http://homepage.hrbeu.edu.cn/web/sunhai" target="_blank">http://homepage.hrbeu.edu.cn/web/sunhai</a></p>

  <h3>Breaking 霹雳舞/街舞竞技经历：</h3>
  <ul>
    <li>黑龙江省大学生街舞健美操竞赛，街舞组冠军，2004.05</li>
    <li>“动感地带”2004 中国大学生街舞挑战赛黑龙江赛区赛 Breaking 冠军，2004.09</li>
    <li>“动感地带”2005 中国大学生街舞挑战赛黑龙江赛区选拔赛 Breaking 冠军，2005.10</li>
    <li>R16 Korea 中国区预选赛，四强，2006.02</li>
    <li>首届 CSC 全国大学生舞蹈比赛，长沙，大学生组街舞冠军，2005.08</li>
    <li>“动感地带”2007 中国大学生街舞挑战赛黑龙江赛区 Breaking 冠军，2007.10</li>
    <li>Freestyle Session 2013, Ypsilanti, Michigan, 团队四强，2013.09</li>
    <li>2022 年黑龙江省霹雳舞锦标赛，哈尔滨队领队/教练员，2022.08</li>
  </ul>

  <h3>Breaking 霹雳舞裁判经历：</h3>
  <ul>
    <li>舞动乾坤黑龙省系列赛，哈尔滨赛区裁判，总决赛裁判，2017.06</li>
    <li>SWEET16&Playfamily 东北赛区裁判，2018.05</li>
    <li>这就是街舞，黑龙江街舞大赛，Breaking 霹雳舞裁判/嘉宾，2021.09</li>
    <li>Be the Best 黑龙江街舞大赛 Vol. 2，Breaking 霹雳舞裁判，2022.06</li>
  </ul>
</div>
`, showDetails: false
    },
    {
        name: '孙南航', avatar: '孙南航.png', details: `<div>
  <p>一级指挥，现任哈尔滨工程大学国家大学生文化素质教育基地教师，中国音乐家协会会员，中国指挥学会会员，中国民族管弦乐学会会员，中国音乐家协会民族管乐研究会理事，黑龙江省高校美育教育指导委员会委员，哈尔滨音乐家协会理事。</p>
</div>
`, showDetails: false
    },
    {
        name: '王婧', avatar: '王婧.png', details: `<div>
  <p>副教授，硕士研究生。哈尔滨工程大学国家大学生文化素质教育基地美育教研室教师，黑龙江省设计协会视觉传达设计分会副秘书长，省普通高校艺术类统招考试评委。</p>
  <p>省级一流课程负责人，主要研究方向为美育、艺术美学与视觉传达设计。</p>
  <p>在国内重要期刊发表学术论文20余篇，编写书籍5部，主持课题20余项；获得国家奖4项，省级成果奖20余项。</p>
</div>
`, showDetails: false
    },
    {
        name: '王维', avatar: '王维.png', details: `<div>
  <p>副教授，哈尔滨工程大学国家大学生文化素质教育基地教师，毕业于中国音乐学院，黑龙江省九三学社教育文化专门委员会委员，中国高等教育学会美育专业委员会会员、中国合唱协会会员、黑龙江省音乐家协会会员、黑龙江省合唱协会会员。</p>
  <p>哈尔滨工程大学教授合唱团、大学生艺术团“海之韵”合唱团指导教师，常任指挥；校级思政示范课程《合唱基础》负责人。</p>
  <p>曾指导学生参加艺术类比赛获国家级三等奖2项，省部级二十余项，并多次获得优秀指导教师荣誉称号。</p>
</div>
`, showDetails: false
    },
    {
        name: '杨点墨', avatar: '杨点墨.png', details: `<div>
  <p>鲁迅美术学院美术学专业硕士研究生毕业。哈尔滨工程大学国家大学生文化素质教育基地美育教研室教师，助教，大学生书法研习社指导教师。</p>
  <p>曾参与省级课题《鲁艺红色经典美术作品谱系分析》，辽宁省社科院《辽宁省文化事业蓝皮书》美育方向助研员，发表省级期刊论文1篇，担任多个展览的策展人与策展助理等职务。</p>
</div>
`, showDetails: false
    },
    {
        name: '赵路辉', avatar: '赵路辉.png', details: `<div>
  <p>哈尔滨工程大学素质基地教师，中共党员，副教授，中央音乐学院硕士，首尔大学访问学者，中央音乐学院-世界民族音乐协会黑龙江省负责人。</p>
  <p>发表中文核心、国家级、省级论文十四篇；出版学术著作《东方民间音乐十五讲》一部，2022年被选为黑龙江省在线课程‘中国民族民间音乐’教材；主持省级教改、校级教改各一项，参与省级、校级教改三项。</p>
  <p>2023年12月黑龙江省第七届“大学生艺术展演”-“集体声乐甲组一等奖”-指导教师；2023年《合唱基础》课程获哈工程校级课程思政示范课程建设点。</p>
</div>
`, showDetails: false
    },
]);

// 获取头像图片的 URL
const getAvatarUrl = (avatar) => {
    // 动态加载头像图片
    return new URL(`../assets/avatars/${avatar}`, import.meta.url).href;
};

// 加载教师详情
const loadTeacherDetails = (index) => {
    const teacher = teachers.value[index];
};
// 切换显示详细信息
const toggleDetails = (index) => {
    const teacher = teachers.value[index];
    teacher.showDetails = !teacher.showDetails;
};

const isOpen = ref({
    teamstructure: false,
    teachingresources: false
});

// 切换展开/收起
const toggleSection = (section) => {
    isOpen.value[section] = !isOpen.value[section];
    // 如果展开了“师资力量”板块且滚动过底部，则自动收起
    if (section === 'teachingresources' && isOpen.value[section]) {
        setTimeout(() => {
            document.querySelector(`#teachingresources .toggle-container`).scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }
};

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
    font-size: 2rem;
    /* margin-bottom: 10px; */
    color: #003366;
}

.content-section p {
    font-size: 1rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
}

.teachers-container {
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    /* 自动调整列数和宽度 */
    gap: 20px;
}

.teacher-box {
    position: relative;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 200px;
    /* 初始固定高度 */
    max-height: 500px;
    /* 最大高度 */
    display: flex;
    flex-direction: column;
}

.teacher-box.expanded {
    height: 500px;
    /* 展开时自动高度 */
}

.teacher-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.teacher-info {
    display: flex;
    align-items: center;
    gap: 15px;
    /* 头像和姓名间距 */
    margin-bottom: 15px;
}

.teacher-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.teacher-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.teacher-details {
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin-top: 10px;
    padding-bottom: 20px;
    overflow-y: auto;
    /* 隐藏滚动条 */
    scrollbar-width: none;
    /* Firefox 隐藏滚动条 */
}

.teacher-details::-webkit-scrollbar {
    display: none;
    /* 隐藏滚动条 */
}

.view-details-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: #0a223b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-container {
    margin: 10px auto 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    border-radius: 50%;
    /* margin-bottom: 10px; */
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

.content-details {
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    padding: 0 15px;
    background-color: #f7f7f7;
    border-radius: 5px;
    overflow: auto;
    max-height: 0%;
    /* 默认收缩 */
    padding: 15px;
    /* 展开时加上内边距 */
}

.content-details[v-show] {
    max-height: 2000px;
    /* 展开时足够大 */
}

.content-details.v-show {
    overflow-y: auto;
    max-height: 2000px;
    /* 展开时的最大高度 */
    transition: max-height 0.3s ease-in-out;
}

.view-details-btn {
    background-color: #007BFF;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.view-details-btn:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
}

/* 适应不同屏幕的布局 */
@media (min-width: 1200px) {
    .teachers-container {
        grid-template-columns: repeat(3, 1fr);
        /* 大屏幕时每行显示4个 */
    }
}

@media (max-width: 1199px) and (min-width: 800px) {
    .teachers-container {
        grid-template-columns: repeat(3, 1fr);
        /* 中等屏幕时每行显示3个 */
    }
}

@media (max-width: 799px) {
    .teachers-container {
        grid-template-columns: 1fr;
        /* 小屏幕时每行显示1个 */
    }

    .teacher-box {
        height: auto;
        /* 小屏幕时自动调整高度 */
    }
}
</style>