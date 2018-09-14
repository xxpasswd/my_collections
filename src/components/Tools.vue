<template>
<div>
    <!-- 主体 -->
  <div class="mix">
      <div class='raw'>
        <div v-for="tools_list in tools_dict" :key="tools_list">
            <div class="column">
                <div class='card'>
                    <h4><b><a :href="tools_list[0]">{{ tools_list[1] }}</a></b></h4> 
                </div>
            </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Tools',
    data () {
        return {
            tools_dict:[
                    ['http://click.pocoo.org/dev/','click'],
                    ['http://docs.python-requests.org/en/master/','requests'],
                    ]
                }
            }  
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.mix{
    padding: 10px 10px;
}
* {
    box-sizing: border-box;
}

a:hover{
    color:red;

}

a{
    color: blue;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 15%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
