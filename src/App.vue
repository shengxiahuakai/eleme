<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div>
        <router-link to="/goods">商品</router-link>
        <router-link to="/ratings">评价</router-link>
        <router-link to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
export default {
  name: 'app',
  data(){
    return{
        seller:{

        }
    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
