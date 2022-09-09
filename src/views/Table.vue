<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="id"
        label="ID"
        width="150">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="age"
        label="年龄"
        width="120">
    </el-table-column>
    <el-table-column
        prop="sex"
        label="性别"
        width="120">
    </el-table-column>
    <el-table-column
        prop="phone"
        label="电话"
        width="120">
    </el-table-column>
    <el-table-column
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="userDelete(scope.row)" type="text" size="small">删除</el-button>
        <el-button @click="findUser(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    findUser(Object){
      this.$router.push('/edit?id='+Object.id)
    },
    userDelete(Object) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
      axios.delete('http://localhost:8181/user/delete/'+Object.id).then((res) =>{
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
    }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
    },
  },
  created() {
    axios.get('http://localhost:8181/user/list').then((res) =>{
      this.tableData = res.data;
    })
  },
  data() {
    return {
      tableData: []
    }
  }
}
</script>
