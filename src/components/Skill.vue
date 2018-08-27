<template>
    <div>
      <ul>
        <li><router-link tag="li" to="/skill"><a>总览</a></router-link></li>
         <li><router-link tag="li" to="/skill/skill_base"><a>入门基础</a></router-link></li>
         <li><router-link tag="li" to="/skill/front"><a>前端</a></router-link></li>
         <li><router-link tag="li" to="/skill/backend"><a>后端</a></router-link></li>
         <li><router-link tag="li" to="/skill/database"><a>数据库</a></router-link></li>
         <li><router-link tag="li" to="/skill/backend"><a>服务器部署</a></router-link></li>
         <li><router-link tag="li" to="/skill/other"><a>其他</a></router-link></li>
      </ul>
      <div id="skill_detail">
        <router-view/>
      </div>
    </div>
</template>

<style scoped>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 15%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #555;
    color: white;
}

#skill_detail{
    margin-left:15%;
    padding:1px 16px;
    height:1000px;
}
</style>

