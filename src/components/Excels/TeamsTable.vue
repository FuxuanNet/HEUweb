<template>
    <div class="team-table">
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>政治面貌</th>
                    <th>职称</th>
                    <th>学历</th>
                    <th>中心职务</th>
                    <th>从事专业</th>
                    <th>工作职责</th>
                    <th>是否专职</th>
                    <th>兼职人员所在单位部门</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, index) in teamMembers" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.gender }}</td>
                    <td>{{ member.politicalStatus }}</td>
                    <td>{{ member.title }}</td>
                    <td>{{ member.education }}</td>
                    <td>{{ member.position }}</td>
                    <td>{{ member.major }}</td>
                    <td>{{ member.duties }}</td>
                    <td>{{ member.isFullTime ? '专职' : '兼职' }}</td>
                    <td>{{ member.partTimeDepartment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
// 教学团队数据
const teamMembers = [
    { name: "张德伟", gender: "男", politicalStatus: "中共党员", title: "教授", education: "硕士研究生", position: "文化素质教育基地主任", major: "学生发展指导", duties: "主持中心全面工作", isFullTime: false, partTimeDepartment: "校本科生院副院长" },
    { name: "刘蓓蓓", gender: "女", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "美育教研室主任", major: "音乐学/钢琴", duties: "负责中心日常管理工作，本科通识课教学，承担《基础乐理》《音乐鉴赏》《钢琴演奏基础》《钢琴作品赏析与演奏》等5门课程教学", isFullTime: true, partTimeDepartment: "" },
    { name: "王婧", gender: "女", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "教师", major: "美术教育/视觉传达", duties: "本科通识课教学，承担《美学与艺术评论》、《平面设计基础》、《自媒体短视频制作》、《视觉传达设计理论与创作》等5门课程教学", isFullTime: true, partTimeDepartment: "" },
    { name: "李晓民", gender: "男", politicalStatus: "群众", title: "副教授", education: "硕士研究生", position: "教师", major: "油画/美术学", duties: "本科通识课教学，承担《艺术导论》、《中西方美术史》、《美术鉴赏》、《绘画理论与创作》等课程教学", isFullTime: true, partTimeDepartment: "" },
    { name: "杨点墨", gender: "女", politicalStatus: "共青团员", title: "助教", education: "硕士研究生", position: "教师", major: "美术学", duties: "本科通识课教学，承担《中国书画鉴赏》、《书法创作》、《摄影基础》", isFullTime: true, partTimeDepartment: "" },
    { name: "赵路辉", gender: "男", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "教师", major: "音乐学/钢琴", duties: "本科生通识课教学，承担课程《西方音乐简史与经典作品赏析》、《流行歌曲弹唱》、《歌曲创作》", isFullTime: true, partTimeDepartment: "" },
    { name: "刘玢", gender: "女", politicalStatus: "民盟", title: "讲师", education: "硕士研究生", position: "教师", major: "音乐学/声乐", duties: "本科生通识课教学，承担课程《歌剧艺术鉴赏》《听觉与视唱基础》《基础乐理》《声乐理论与表演》", isFullTime: true, partTimeDepartment: "" },
    { name: "王维", gender: "女", politicalStatus: "九三学社", title: "副教授", education: "大学本科", position: "教师", major: "合唱指挥", duties: "本科生通识课教学，承担课程《合唱基础》、《基础声乐》、《合唱艺术》、《交响乐鉴赏》", isFullTime: true, partTimeDepartment: "" },
    { name: "孙南航", gender: "男", politicalStatus: "中共党员", title: "一级指挥", education: "大学本科", position: "教师", major: "乐队指挥", duties: "本科生通识课教学，承担课程《民族器乐作品鉴赏》、《交响乐鉴赏》、《中国民乐合奏》、《西洋管弦乐合奏》、《军乐合奏》", isFullTime: true, partTimeDepartment: "" },
    { name: "郭实", gender: "男", politicalStatus: "民主建国会会员", title: "副教授", education: "硕士研究生", position: "教师", major: "音乐学/手风琴", duties: "本科生通识课教学，承担课程《中国近现代音乐简史》、《戏剧鉴赏》、《话剧表演基础》、《手风琴演奏基础》、《手风琴理论与表演》", isFullTime: true, partTimeDepartment: "" },
    { name: "鹿洋", gender: "女", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "教师", major: "舞蹈编导", duties: "本科生通识课教学，承担课程《舞蹈鉴赏》《舞蹈基础》《舞蹈理论与表演》等课程教学", isFullTime: true, partTimeDepartment: "" },
    { name: "关丽娟", gender: "女", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "教师", major: "音乐学/古筝", duties: "本科生通识课教学，承担课程《古筝演奏基础》、《古筝理论与表演》、《中国民族民间音乐鉴赏》等课程教学", isFullTime: true, partTimeDepartment: "" },
    { name: "宋冠仪", gender: "女", politicalStatus: "共青团员", title: "科员", education: "大学本科", position: "综合办职员", major: "音乐表演", duties: "负责中心综合事务、场地运营与管理、设备运营与管理等工作", isFullTime: true, partTimeDepartment: "" },
    { name: "聂聪", gender: "男", politicalStatus: "群众", title: "科员", education: "硕士研究生", position: "教务办职员", major: "化学", duties: "负责中心教务管理、课程管理、教学任务管理、网站运营与管理等工作", isFullTime: true, partTimeDepartment: "" },
    { name: "孙海", gender: "男", politicalStatus: "群众", title: "副教授", education: "博士研究生", position: "教师", major: "飞行器设计、固体力学", duties: "本科生通识课教学，承担课程《街舞与霹雳舞基础》，大学生艺术团4U FAMILY街舞团指导教师", isFullTime: false, partTimeDepartment: "校航天与建筑工程学院" },
    { name: "杜兆群", gender: "男", politicalStatus: "中共党员", title: "副教授", education: "硕士研究生", position: "教师", major: "油画、工业设计", duties: "本科生通识课教学，承担课程《雪雕艺术与设计》，担任大学生艺术团冰雪艺术工作坊指导教师", isFullTime: false, partTimeDepartment: "校机电工程学院" },
    { name: "赵晶磊", gender: "男", politicalStatus: "中共党员", title: "讲师", education: "硕士研究生", position: "教师", major: "播音与主持", duties: "担任大学生艺术团语翼朗诵团外聘专业指导教师", isFullTime: false, partTimeDepartment: "哈尔滨师范大学传媒学院" }
];

</script>

<style scoped>
.team-table {
    margin: 20px;
    font-family: Arial, sans-serif;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

th,
td {
    padding: 12px;
    text-align: center;
    color: #333;

    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f0f0f0;
}

tr:hover {
    background-color: #f9f9f9;
}

@media (max-width: 768px) {
    table {
        font-size: 14px;

    }
}
</style>
