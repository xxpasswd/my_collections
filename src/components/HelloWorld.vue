<template>
<div>
  <div>
    <ul>
      <li @click="home"><router-link tag="li" to="/home"><a :class="{active:is_home}">Home</a></router-link></li>
      <li @click="mix"><router-link tag="li" to="/mix"><a :class="{active:is_mix}">各种导航</a></router-link></li>
      <li @click="skill"><router-link tag="li" to="/skill"><a :class="{active:is_skill}">技能树</a></router-link></li>
      <li @click="other"><router-link tag="li" to="/other"><a :class="{active:is_other}">其他收藏</a></router-link></li>
    </ul>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    is_home:false,
    is_mix:true,
    is_skill:false,
    is_other:false
    }
  },
  methods: {
    home () {
      this.is_home = true
      this.is_mix = false
      this.is_skill = false
      this.is_other = false
    },
    mix () {
      this.is_home = false
      this.is_mix = true
      this.is_skill = false
      this.is_other = false
    },
    skill () {
      this.is_home = false
      this.is_mix = false
      this.is_skill = true
      this.is_other = false
    },
    other () {
      this.is_home = false
      this.is_mix = false
      this.is_skill = false
      this.is_other = true
    }
  }
}
</script>


<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(73, 71, 71);
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
</style>
