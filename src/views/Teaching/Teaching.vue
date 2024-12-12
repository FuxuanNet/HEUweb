<template>
    <div class="content-section" id="teaching">
        <h2>实践教学</h2>
        <p>多元化的艺术体验活动，让学生从实践中感受艺术魅力。</p>
    </div>
    <div class="container">
        <!-- 第一行：艺术比赛和艺术体验 -->
        <div class="row" id="teaching1">
            <div class="section blue-background">
                <h2 class="section-title">艺术比赛</h2>
                <div class="card-list">
                    <div class="card" v-for="(item, index) in competitionLinks" :key="index">
                        <a :href="item.link" class="card-link">
                            <h3 class="card-title">{{ item.title }}</h3>
                        </a>
                    </div>
                </div>
            </div>

            <div class="section light-background">
                <h2 class="section-title">艺术体验</h2>
                <div class="card-list">
                    <div class="card" v-for="(item, index) in experienceLinks" :key="index">
                        <a :href="item.link" class="card-link">
                            <h3 class="card-title">{{ item.title }}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第二行：艺术实践和艺术展演 -->
        <div class="row" id="teaching2">
            <div class="section light-background">
                <h2 class="section-title">艺术实践</h2>
                <div class="card-list">
                    <div class="card" v-for="(item, index) in practiceLinks" :key="index">
                        <a :href="item.link" class="card-link">
                            <h3 class="card-title">{{ item.title }}</h3>
                        </a>
                    </div>
                </div>
            </div>

            <div class="section blue-background">
                <h2 class="section-title">艺术展演</h2>
                <div class="card-list">
                    <div class="card" v-for="(item, index) in performanceLinks" :key="index">
                        <a :href="item.link" class="card-link">
                            <h3 class="card-title">{{ item.title }}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const competitionLinks = [
    { title: '校园艺术节|哈尔滨工程大学第三届视觉设计大赛获奖作品展示', link: 'https://mp.weixin.qq.com/s/r2KC0EdPseYv_E8u64Cnfw' },
    { title: '校园艺术节|哈尔滨工程大学第三届器乐比赛精彩回顾', link: 'https://mp.weixin.qq.com/s/5uuQrBnC69XhersrQVNILQ' },
    { title: '校园艺术节|第三届声乐比赛精彩回顾及获奖结果公示', link: 'https://mp.weixin.qq.com/s/xpoJ1cXAr7rrA-FHEX6AqA' },
    { title: '校园艺术节｜第三届舞蹈大赛圆满落幕', link: 'https://mp.weixin.qq.com/s/yfwmpVJrJ5EQIYdqXfNLeQ' },
    { title: '美育浸润校园|哈工程2024年度艺术比赛活动预告！', link: 'https://mp.weixin.qq.com/s/vcYsU68I3B46ko2y0w2BNw' },
    { title: '关于举办哈尔滨工程大学第十五届大学生合唱与重唱艺术比赛的通知', link: 'https://mp.weixin.qq.com/s/b_TJaafvl2NG80LY3YvcuQ' },
    { title: '哈尔滨工程大学第二届书法比赛获奖作品', link: 'https://mp.weixin.qq.com/s/h8lA7eL9AERpWq1TmwT_Kg' },
    { title: '精彩纷“程” ！就在28日19：00，启航剧场……', link: 'https://mp.weixin.qq.com/s/NQjJSlS5hpkyU-DRhR4vlw' }
]

const experienceLinks = [
    { title: '艺术实践|“零基础古筝”艺术实践体验活动开始报名！', link: 'https://mp.weixin.qq.com/s/nwftyJCg3B2PmReCli3ipw' },
    { title: '艺术实践|钢琴演奏艺术实践体验活动回顾', link: 'https://mp.weixin.qq.com/s/dv8-7aWdystKTWefvL8IwQ' },
    { title: '艺术实践|传统技艺与创意的艺术体验活动', link: 'https://mp.weixin.qq.com/s/fstMUNZzTtHFstVIMQIR_A' },
    { title: '艺术实践|声乐表演唱之艺术实践体验活动回顾', link: 'https://mp.weixin.qq.com/s/ORtJLP5droYxOsbmoTrffA' },
    { title: '艺术实践|合唱指挥之艺术体验活动回顾', link: 'https://mp.weixin.qq.com/s/quI0bKKyrCZEjpguFmpNag' },
    { title: '艺术实践|“舞蹈表演”——艺术体验活动回顾', link: 'https://mp.weixin.qq.com/s/UIs3YYC21_vMna8EpenCnw' },
    { title: '艺术实践|声乐表演唱体验活动开始报名了！', link: 'https://mp.weixin.qq.com/s/YX4bgvewSXqhYwXnxkixuA' },
    { title: '艺术实践|“舞蹈表演”——艺术体验活动回顾', link: 'https://mp.weixin.qq.com/s/tv8mMfo_W91WErtwSXM0SA' }
]

const practiceLinks = [
    { title: '校园艺术节∣美育展演系列——阳光音乐会（预告）', link: 'https://mp.weixin.qq.com/s/unABmxUyM3yHFUj6-KQGoQ' },
    { title: '校园艺术节∣美育展演系列——阳光音乐会（钢琴专场预告）', link: 'https://mp.weixin.qq.com/s/07p3XnwMc5yh1Ayhs2L4_g' },
    { title: '校园艺术节∣美育展演系列——阳光音乐会（手风琴专场预告）', link: 'https://mp.weixin.qq.com/s/Z-gxxMZ05C2IwkKSz8zWVA' },
    { title: '校园艺术节∣美育展演系列之阳光音乐会预告一', link: 'https://mp.weixin.qq.com/s/AygQynK6nmhiddAPnLbURQ' },
    { title: '校园艺术节∣美育展演系列之阳光音乐会预告二', link: 'https://mp.weixin.qq.com/s/uzi2Gz0-DLg0K_7oSApJ2A' },
    { title: '乐享之夜|启航室内乐沙龙活动预告', link: 'https://mp.weixin.qq.com/s/2ToFi5QyYn-K-nIgPP_FDA' },
    { title: '音符飞扬 梦想启航|启航室内乐沙龙活动回顾', link: 'https://mp.weixin.qq.com/s/o6mAVwG-915pGwVfeVoQLw' }
]

const performanceLinks = [
    { title: '艺术展演|“乐弘盛世 工程筝音”息兮古筝团专场音乐会预告', link: 'https://mp.weixin.qq.com/s/wqaVJXvu_Uk5NbffTO24pA' },
    { title: '临池学书|书法社团成果展', link: 'https://mp.weixin.qq.com/s/7NVsVSgLcqPCvrrxF4OsPA' },
    { title: '艺术展演|2024秋季地平线视觉设计成果展', link: 'https://mp.weixin.qq.com/s/cUnG3m4fn45iGPyIQo5KXg' },
    { title: '2024《季节的颂歌》学生秋季画展', link: 'https://mp.weixin.qq.com/s/gYjWFBj_7dAiCs5ydDcEVw' },
    { title: '“共歌龙江情、同筑冰雪梦”|迎第九届亚冬会主题声乐专场', link: 'https://mp.weixin.qq.com/s/mI964zMjoR_5Wt2tGs_nFQ' },
    { title: '“共歌龙江情、同筑冰雪梦”|迎第九届亚冬会主题声乐专场完美落幕', link: 'https://mp.weixin.qq.com/s/5nJ5wmpyjtX4_o6KU_ztSQ' }
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

/* 主容器布局 */
.container {
    padding: 30px;
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
}

.row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
}

.section {
    flex: 1;
    min-width: 280px;
    padding: 20px;
    border-radius: 8px;
}

.blue-background {
    background-color: rgb(111, 115, 131);
    color: white;
}

.light-background {
    background-color: #f0f0f0;
    color: #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 28px;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

.card-link {
    text-decoration: none;
    color: inherit;
}

.card-title {
    font-size: 18px;
    font-weight: 600;
    color: rgb(11, 23, 86);
    margin: 0;
}

.card-title:hover {
    /* text-decoration: underline; */
    color:rgb(4, 10, 44);
}
</style>
