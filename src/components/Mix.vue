<template>
<div>
    <!-- 主体 -->
  <div class="mix">
    <div v-for="(nav_list,key) in nav_dict" :key="nav_list">
        <div :id="key">
            <h3>{{ key }}</h3>
            <hr/>
            <div class="row">
                <div v-for="s in nav_list" :key="s" class="column">
                    <div class="card">
                        <div class="container">
                        <a :href="s[0]">{{ s[1] }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <!-- 侧边导航栏 -->
  <div id="nav-bar">
		<table cellspacing="6px">
			<tbody>
                <tr v-for="(nav_list,key) in nav_dict" :key="nav_list">
                    <th>
                        <a :href= "'#'+key" target="_self">{{key}}</a>
                    </th>
                </tr>
			</tbody>
		</table>
	</div>
</div>
</template>

<script>
export default {
    name: 'Mix',
    data () {
        return {
            nav_dict:{
                '综合':[
                    ['http://www.anquanquan.info/','安全圈'],
                    ['http://study.163.com/curricula/cs.htm','计算机课程'],
                    ['https://stackoverflow.com/questions','stackoverflow'],
                    ['http://www.imooc.com/','慕课网'],
                    ['http://www.runoob.com/','菜鸟教程'],
                    ['https://www.ichunqiu.com/company/qad/show','企安店'],
                    ['https://www.imooc.com/learn/9','html/css基础'],
                    ['https://github.com/vinta/awesome-python','Awesome-python'],
                    ['https://python-web-study.readthedocs.io/zh_CN/latest/','python web 学习']
                    ],
                '博客学习':[
                    ['http://www.cnblogs.com/time-read/','博客园'],
                    ['http://www.jobbole.com/bookmark/','伯乐在线'],
                    ['https://www.zhihu.com/','知乎'],
                    ['https://juejin.im/timeline', '掘金'],
                    ['https://www.jianshu.com/', '简书'],
                    ['https://github.com/xxpasswd','GitHub'],
                    ['https://drive.wps.cn/','WPS'],
                    ['https://github.com/xxpasswd?tab=repositories', 'github repo'],
                    ['https://github.com/xxpasswd?tab=stars','github stars'],
                    ['http://www.pythontip.com/','python Tip'],
                    ['https://note.youdao.com/','有道云笔记']
                    ],
                'python':[
                    ['https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/','BeautifulSoup4'],
                    ['http://cn.python-requests.org/zh_CN/latest/','requests'],
                    ['https://git-scm.com/book/en/v2','git-book'],
                    ['https://modwsgi.readthedocs.io/en/develop/requirements.html','mod_wsgi'],
                    ['https://dataset.readthedocs.io/en/latest/index.html','dataset'],
                    ['https://www.ctolib.com/python/','python开发社区'],
                    ['https://github.com/trending?l=python','python Trending'],
                    ['http://python-web-guide.readthedocs.io/zh/latest/index.html','python web guide'],
                    ['http://python3-cookbook.readthedocs.io/zh_CN/latest/index.html','python cookbook'],
                    ['https://www.lfd.uci.edu/~gohlke/pythonlibs/','python package for windows'],
                    ['http://www.zlovezl.cn/articles/python-using-variables-well/','python变量命名技巧'],
                    ['http://ccbv.co.uk/', 'Django CBV']
                    ],
                '其他':[
                    ['https://www.processon.com/diagrams','proccess on'],
                    ['https://readthedocs.org/dashboard/','readthedoc'],
                    ['https://fly.layui.com/store/','前端模板'],
                    ['https://www.cs.usfca.edu/~galles/visualization/Algorithms.html','Data Structure visulization']
                    ],
                    }
                }
            }  
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.mix{
    padding: 0px 10px;
}
* {
    box-sizing: border-box;
}

/* Float four columns side by side */
.column {
    float: left;
    width: 15%;
    padding: 5px 5px;
    height: 50px;
}

/* Clear floats after the columns */
.row:after {
    content: '';
    display: table;
    clear: both;
}

a:hover{
    color:red;

}

a{
    color: blue;
}
.container {
    text-align: left;
}
hr{
    background-color:#000;
    height:2px;
    border:none;
}

#nav-bar {
    right: 40px;
    top: 240px;
    background: rgb(148, 238, 208) ;
    position: fixed;
}
</style>
