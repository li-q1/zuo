<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户管理</router-link>
    <router-link to="/guestbook">留言板</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
#app {

}
</style>
