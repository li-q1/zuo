<template>
  <div>
    <input  type="text" v-model="msg">
    <input type="button" value="发表" @click="add_note">
    <ul>
      <li v-for="(value,index) in notebook" :key="index"><span>{{ value }}</span> <a href="javascript:;" @click="del_note(index)">删除</a></li>
    </ul>
    <span v-if="notebook.length !=0">总数量：{{notebook.length}}</span>
    <input type="button" value="删除所有" @click="clearnote" v-if="notebook!=0">
  </div>
</template>

<script>
export default {
  name: "Guestbook",
  data() {
   return {
     msg: '' ,
     notebook: localStorage.notebook ? JSON.parse(localStorage.notebook):[]
   }
  },
  methods:{
    add_note(){
      let msg =this.msg;
      if (msg){
        this.notebook.unshift(this.msg);
        localStorage.notebook = JSON.stringify(this.notebook);
        this.msg = '';
      }
    },
    del_note(id){
      this.notebook.splice(id,1);
      localStorage.notebook = JSON.stringify(this.notebook);
      this.msg = '';
    },
    clearnote(){localStorage.clear()
    this.notebook =[]
    },
  }
}
</script>

<style scoped>

</style>
