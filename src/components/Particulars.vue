<template>
<div>
  <table border="2">
    <tr>
      <td>{{user_list[id].id}}</td>
      <td>{{user_list[id].name}}</td>
      <td>{{user_list[id].age}}</td>
      <td>{{user_list[id].msg}}</td>
      <td>{{user_list[id].bir}}</td>
      <td>{{user_list[id].address}}</td>
    </tr>
  </table>
  <button @click="goback">返回上一页</button>
</div>
</template>

<script>
export default {
  name: "Particulars",
  data(){
    return {
      user_list: [
        {id: 1, name: "小黑", age: 12, msg: "我是python大神",bir:2020-12-12,address:"asdfwer"},
        {id: 2, name: "小白", age: 32, msg: "我是python大神",bir:2020-12-12,address:"asdfwer"},
        {id: 3, name: "小子", age: 42, msg: "我是python大神",bir:2020-12-12,address:"asdfwer"},
        {id: 4, name: "小绿", age: 52, msg: "我是python大神",bir:2020-12-12,address:"asdfwer"},
      ],
      id:this.$route.query.id
}},
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
