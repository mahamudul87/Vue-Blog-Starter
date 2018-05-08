<template>
  <div id="app">
  <div class="wrapper">
	<div class="filters">

        <div>
        	<input type="text" @input="filterByTitle" placeholder="Search">
        </div>

        <div>
        	<p>Filter by label:</p>
            <div class="labels">
            	<a v-for="lable in getFilterLables" @click="filterByLable(lable)" href="#">{{lable.name}}</a>
            </div>
        </div>

        <div>
        	<p>Filter by month:</p>
            <div class="months">
            	<a v-for="month in getFilterMonths" @click="filterByMonth(month)" href="#">{{month.name}}</a>
            </div>
        </div>

    </div>

      <router-view class="view"></router-view>

</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  data(){
    return{
    }
  },

  methods:{
    filterByLable(lable){
      this.$store.commit('FILTER_LABLE',lable.id)

    },
    filterByMonth(month){
      this.$store.commit('FILTER_MONTH',month.name)
    },
    filterByTitle({ type, target }){
      this.$store.commit('FILTER_BY_TITLE',target.value)
    }
  },
  computed:{
    ...mapGetters({
      getFilterLables: 'getLables',
      getFilterMonths: 'getMonths'
    })
  }
}
</script>
<style>
body {
	font-family:Verdana, Geneva, sans-serif;
	padding:30px;
	font-size:14px;
}

.wrapper {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 4fr;
}

.filters {
	background-color:#f5f5f5;
}

.filters > * {
	padding:30px;
	padding-bottom:0;
}

.filters > *:last-child {
	padding-bottom:30px;
}


.filters a {
	display:inline-block;
	background-color:#C69;
	color:white;
	padding:5px;
	text-decoration:none;
	margin:0 5px 5px 0;
}

.filters .months a {
	background-color:#3C9;
}

.filters a:hover {
	opacity:0.8;
}

.filters input {
	width:94%;
	padding:10px 3%;
	border:0;
	outline:3px solid #ccc;
}

.articles {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
}

.articles > a {
	background-color:#09F;
	text-align:center;
	text-decoration:none;
    display: grid;
	padding:30px;
    justify-content: center;
    align-items: center;
}

.articles > a > span {
    display: table;
	width:100%;
	color:white;
	opacity:0.6;
	opacity:1;
	font-size:20px;
}

.articles > a > span:last-child {
	font-size:13px;
	opacity:0.7;
	margin-top:10px;
}

.articles > a:hover {
	opacity:0.8;
}

.pages {
    grid-column: 1 / 4;
}

.pages a {
	color:#333;
	text-decoration:none;
	background-color:#f5f5f5;
	display:inline-block;
	width:20px;
	height:20px;
	line-height:19px;
	text-align:center;
}

.pages a.active {
	font-weight:bold;
}
</style>
