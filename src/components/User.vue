<template>
  <div>
    <h1>用户管理系统</h1>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>个人信息</td>
        <td>操作</td>
      </tr>
      <tr v-for="(user,index) in user_list" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.msg }}</td>
        <td>
          <button @click="link1(index)">查看用户详情</button>
<!--          <button @click="link2(index)">修改</button>-->
          <button @click="del_user(index)">删除</button>

<!--          <button @click="add_user">增加</button>-->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user_list: [
        {id: 1, name: "小黑", age: 12, msg: "我是python大神", bir: 2020 - 12 - 12, address: "asdfwer"},
        {id: 2, name: "小白", age: 32, msg: "我是python大神", bir: 2020 - 12 - 12, address: "asdfwer"},
        {id: 3, name: "小子", age: 42, msg: "我是python大神", bir: 2020 - 12 - 12, address: "asdfwer"},
        {id: 4, name: "小绿", age: 52, msg: "我是python大神", bir: 2020 - 12 - 12, address: "asdfwer"},
      ]
    }
  },
  methods: {
    link1(id) {
      this.$router.push("/particulars?id=" +id)
    },
    // link2(id){
    //
    //   this.user_list[id]
    // },
    del_user(id){

      this.user_list.splice(id,1)
    },

  },
}
</script>

<style scoped>

</style>
