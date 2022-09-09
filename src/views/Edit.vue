<template>
  <div>
    <el-form :model="user"  ref="user" label-width="100px">
      <el-form-item label="id" prop="id">
        <el-input v-model="user.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="user.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="user.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="user.sex"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        name:'',
        age:'',
        sex:'',
        phone: '',
      }
    }
    },
    created() {
    let id = this.$route.query.id
      axios.get('http://localhost:8181/user/find/'+id).then((res) =>{
        console.log(res)
        this.user = res.data;
      })
    }
}
</script>

<style scoped>

</style>
