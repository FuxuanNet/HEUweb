<template>
    <div class="content-section" id="teamstructure">
        <h2>大学生艺术团</h2>
        <p>以艺术为载体，展现学生无限创意与才华的大学生艺术团。</p>
    </div>
    <div class="container">
        <div class="box" v-for="(club, index) in clubs" :key="club.name" :class="{ 'reverse-layout': index % 2 !== 0 }">
            <div class="box-content">
                <div class="box-title">{{ club.title || club.name }}</div>
                <div class="box-description">{{ club.description }}</div>
            </div>
            <!-- 动态加载图片 -->
            <img :src="getClubImage(club.name)" alt="" class="box-image" />
        </div>
    </div>
</template>

<script setup>
const clubs = [
    { name: "学生工作中心", title: "大学生艺术团学生工作中心", description: "是在校本科生院指导下，由国家大学生文化素质教育基地负责管理的一个充满活力和创造力的学生艺术团体。是学校各项艺术活动的骨干中坚力量——他们既是学校各种艺术活动的参演者，又是活动的保障者和工作人员。设有：艺术部、活动保障部、媒体宣传部、对外联络部等学生艺术活动工作部门，是提升学生艺术素养、展现学生艺术才华、增强学生团队协作精神的重要平台，在推进校园美育实践活动普及，推进校园艺术比赛平台建设，繁荣校园文化建设等方面，发挥着至关重要的作用。" },
    { name: "管弦乐团", title: "大学生管弦乐团", description: "成立于2010年，由素质基地美育教研室教师——孙南航老师指导，活跃在校内外的音乐文化舞台上。多年来，乐团多次举办专场音乐会、哈尔滨之夏音乐会、哈尔滨工程大学新年音乐会、“音”为有你音乐沙龙、七十周年校庆晚会等重要演出活动。曾代表学校参加重要比赛，获国家级三等奖1项，省部级8项。" },
    { name: "军乐团", title: "大学生军乐团", description: "成立于2012年。由素质基地美育教研室教师——孙南航老师指导，自乐团成立以来，以“繁荣校园文化生活，提高大学生文化艺术修养，推进素质教育，促进学校精神文明建设”为宗旨，通过开展灵活多样，形式丰富的活动，培养学生对军乐的兴趣和理解力，为我校学生的成长营造良好的艺术气氛，极大的提高了广大学生的艺术修养及综合素质。" },
    { name: "民乐团", title: "大学生民族乐团", description: "成立于2012年, 由素质基地美育教研室教师——孙南航老师指导，旨在为学校热爱民乐,热爱艺术的同学提供一个共同学习交流的平台。乐团自成立以来,曾代表学校参加多项艺术比赛，荣获全国大学生艺术展演三等奖2项，省部级奖励十余项。乐团还多次参加校内外重要演出活动,如建校70周年民族交响音乐会、哈尔滨工程大学新年音乐会等。乐团多年来致力于中国传统文化传承教育,为落实高校美育浸润工作起到了积极的推动作用。" },
    {
        name: "爱乐钢琴团", title: "“爱乐”钢琴团", description: `成立于2008年，是我校热爱钢琴艺术的学生展示才华、交流学习、传承文化的重要平台。由素质基地美育教研室主任——黑龙江省音乐家协会钢琴专委会理事委员/刘蓓蓓老师，负责日常专业指导和严格训练，大家怀着对钢琴艺术共同的热爱和追求，通过日常教学、举办音乐会、面向全校普及钢琴艺术知识开展讲座、参加比赛等全方位多平台艺术实践结合，极大增强乐团学生的钢琴演奏能力，提升艺术表现力、艺术创造力、心理素质及个人综合素养，成为提升我校学生高雅艺术欣赏品味，加强校园文化建设的中坚力量。

曾荣获黑龙江省大学生艺术展演一等奖4项，二等奖8项，三等奖3项，以及2016 美南“肖邦”第二届国际钢琴大赛钢琴（专业组）铜奖，2016黑龙江省音乐大赛钢琴比赛一等奖，2019李斯特国际青少年钢琴大赛（中国赛区）金奖等多项专业钢琴比赛奖项。`},
    { name: "手风琴团", title: "大学生手风琴团", description: "2014年10月成立，是一支年轻、团结且活力四射的队伍。由素质基地美育教研室教师——郭实老师指导，乐团不仅汇聚了对手风琴满怀热情的学生，更是一个梦想与才华碰撞的舞台。郭老师以其深厚的艺术造诣和严谨的教学态度，引领着大家不断攀登艺术的高峰。在这里每一位成员都怀揣着对音乐的无限热爱，共同探索手风琴的无限魅力，用琴键的旋律编织青春的记忆。" },
    { name: "息兮古筝乐团", title: "“息兮”古筝团", description: "成立于2014年，在素质基地美育教研室教师——关丽娟老师的带领下，曾获得大学生艺术展演黑龙江省一、二、三等奖，黑龙江省艺术类高校教学成果展演优秀奖。致力于传承和弘扬古筝文化，坚持以审美教育为核心，学生通过接触古筝独奏、重奏、合奏、协奏等不同的演奏形式，体验从指尖迸发出的灵动与优雅，为学校献上一次次美轮美奂的表演成果。" },
    { name: "海之韵合唱团", title: "“海之韵”合唱团", description: "成立于2008 年。由素质基地美育教研室教师——王维老师指导，活跃在校内外的各类大型文艺活动及比赛中，为我校培养近千名优秀合唱团员。曾举办“追梦红楼”交响合唱音乐会、“初心与恒心”党史分享会、合唱艺术公开课等重要活动；参与哈尔滨工程大学建校70周年文艺晚会、迎新晚会、毕业典礼、跨年晚会等多项大型活动，曾荣获黑龙江省大学生艺术展演等省部级荣誉十余项，为我校美育浸润推进落实贡献了重要力量。" },
    { name: "畅·响声乐团", title: "“畅·响”声乐团", description: "成立于2019年。团内囊括美声、民族、通俗等多种唱法，排演形式灵活多样，包含独唱、重唱、表演唱等。素质基地美育教研室教师——刘玢老师在给予大家专业指导的同时，也以全新的理念为怀有音乐梦想及热爱表演的同学们提供一个展现自我与锻炼自身的良好平台。曾荣获黑龙江省第七届大学生艺术展演个人声乐甲组一等奖、三等奖；集体声乐甲组二等奖、戏剧甲组三等奖等。多名成员荣获学校“十佳歌手”称号，冠军也囊括其中。参与录制哈尔滨新闻频道—歌声中的哈尔滨。排演民族歌剧《沂蒙山》、中国古典诗词朗诵音乐会、声动一夏等。在70周年校庆晚会、本科生院党日活动、校园民族文化节、雪雕大赛开幕式上都有精彩的演出。" },
    {
        name: "语翼朗诵团", title: "“语翼”朗诵团", description: `成立于2019年，由我校热爱主持、朗诵以及有志于提高播音朗诵水平的学生组成。由素质基地美育教研室主任——刘蓓蓓老师负责指导。该团多次圆满完成我校各类活动主持和朗诵任务，包括哈尔滨工程大学建校七十周年文艺晚会、国际大学生雪雕大赛文艺晚会、校科研表彰大会、庆祝教师节表彰大会、建党100周年“初心与恒心"党史教育分享会、国际文化节，校迎新晚会及欢送毕业生晚会、“艺苑芳菲"艺术实践教学汇报演出、中国古典诗词朗诵音乐会、启航艺术沙龙等。

曾获教育部“读懂中国”全国最佳视频奖1项、全国大学生艺术展演朗诵国家二等奖1项；黑龙江省教育厅大学生艺术展演朗诵一等奖5项，二等奖1项，三等奖2项；省文化和旅游厅艺术类高校教学成果展示播音主持类一等奖2项、二等奖2项、三等奖2项等荣誉。`},
    { name: "程澈剧团", description: "成立于2022年，作为校园艺术新势力，汇聚了一群对话剧艺术充满热忱的青年才俊。由素质基地美育教研室教师——郭实老师指导，剧团迅速崭露头角，成功策划并举办了两届话剧小品比赛，在70周年校庆晚会和毕业晚会上，剧团也献上了精彩的演出：《听海扬帆》和《两老办院》，赢得了师生的一致好评。与各大高校交流合作，积极拓宽视野，共同推动话剧艺术的繁荣。翻排国家话剧院经典作品赢得了广泛赞誉。在黑龙江省大学生艺术展上荣获集体戏剧甲组二等奖2项。" },
    { name: "“飞鹭”舞蹈团", description: "2008年9月成立以来，以中国舞为核心，深入挖掘舞蹈中的文化内涵与民族精神，涵盖中国古典舞、中国民族民间舞等多个舞种。由素质基地美育教研室教师——鹿洋老师指导，舞团多次参加校内外各项文艺演出及展演，如哈尔滨工程大学70周年校庆文艺晚会、校毕业生晚会、国际雪雕大赛文艺汇演、博雅艺术节舞蹈专场等。多次获得国家级和省部级奖项，如：第三届全国大学生艺术展演二等奖；第四届全国大学生艺术展演三等奖；第三届、第四届、第七届黑龙江省大学生艺术展演一等奖；黑龙江省高校舞蹈大赛一等奖等奖项；第七届全国大学生艺术展演三等奖等。" },
    { name: "4U Family街舞团", description: "成立于2002年，是一个充满活力与激情的团体，致力于展示街舞艺术的魅力,培养学生的团队合作和协作能力，释放压力，提高学生身体素质和音乐表现，展现我校多姿多彩的校园文化氛围。多年来获得多个世界级、国家和省级奖项，包括：2005年首届 CSC全国大学生舞蹈比赛街舞组冠军；2004\-2007动感地带大学生街舞比赛黑龙江省赛区冠军；Freestyle Session 密西根团队四强等比赛。指导教师是我校航天与建筑工程学院的博士生导师——孙海老师，街舞舞龄20余年，霹雳舞 \(Break Dancing\) 国家一级裁判。" },
    {
        name: "冰雪艺术工作坊", description: `成立于2004年，指导教师是我校机电工程学院的杜兆群老师，是国家首批大学生创新平台资助建设的大学生艺术实践团体。往届成员130人左右，保研率70%以上，目前在团人数13人。冰雪艺术部是以北方冰雪艺术文化为研究内容，科技与艺术相结合为核心，理工类学科为背景，跨学科合作的艺术实践团体。2009年，冰雪艺术部创建的哈尔滨工程大学国际大学生雪雕比赛，现已纳入教育部国家大学生科创竞赛目录。

荣获国内外雪雕竞赛获奖43次，其中第一名23次，在意大利、美国、加拿大等7次国际竞赛中获得第一名4次，2020年第十二届“挑战杯”中国大学生创业计划竞赛获得铜奖，2022年第八届黑龙江省“互联网＋”大学生创新创业大赛中荣获铜奖，2023年获得第七届黑龙江省大学生艺术展演一等奖。2024年7月，获第七届全国大学生艺术展演活动学生艺术实践工作坊一等奖。` },
    { name: "地平线视觉设计工作室", description: "成立于2008年9月，由素质基地美育教研室教师——黑龙江省设计协会视觉传达设计分会副秘书长/王婧老师指导，以美育浸润学生，以课带团，全面提升学生审美感知、艺术表现、创意实践等核心素养。以兴趣点入手，由简到繁培养学生的造型能力、创意能力、视觉语言表达能力。循序渐进建立学生的艺术思维和情感表达，从创作、展览、比赛、项目全方位培养学生，形成不拘一格的艺术风格。工作室为院系、书院、社团的宣传部门培养了大量设计人才，推出了视觉设计成果展、行走的美育课堂、社区艺术实践等产学研品牌活动，原创设计获得国家奖5项，省一等奖6项，省二等奖9项。" },
    { name: "启点绘画工作室", description: "成立于2008年9月，由素质基地美育教研室教师——黑龙江省美术家协会油画艺术委员会副秘书长，黑龙江省油画学会副秘书长/ 李晓民老师指导，旨在活跃校园文化生活和促进大学生美术创作能力的大学生美术类社团。每年定期举办大学生美术作品展览。学生在各级绘画比赛多次奖项。" },
    { name: "大学生书法研习社", description: "成立于2006年。由素质基地美育教研室教师——杨点墨老师负责指导。翰墨可育人，字字溢书香。社团旨在传承民族瑰宝，弘扬书法精神，发展中国的书法艺术，同时丰富校园文化生活的发展，让同学们展露自我的风采，发挥自己的一技之长。在全国大学生艺术展演屡获殊荣：荣获国家一等奖、二等奖、三等奖，省级一等奖多项，为我校赢得大量荣誉。" }
];

// 获取社团对应的图片路径
function getClubImage(clubName) {
    const imagePath = import.meta.env.BASE_URL + `/assets/大学生艺术团-${clubName}figures/1.png`;
    return imagePath;
}
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

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.box {
    display: flex;
    width: 80%;
    max-width: 1200px;
    height: 300px;
    background: #f9f9f9;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 10px 0;
}

.box:hover {
    transform: scale(1.05);
}

.box-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 66.66%;
}

.box-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.box-description {
    font-size: 1rem;
    color: #555;
}

.box-image {
    width: 33.33%;
    height: 100%;
    object-fit: cover;
    border-left: 2px solid #ddd;
}

.reverse-layout .box-content {
    order: 2;
}

.reverse-layout .box-image {
    order: 1;
}
@media (max-width: 768px){
    .box {
        padding: 10px;
            display: flex;
            width: 95%;
            max-width: 1200px;
            height: auto;
            background: #f9f9f9;
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
            margin: 10px 0;
        }
}
</style>
