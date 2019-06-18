<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="524">
      <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="usertel" label="联系电话" width="150"></el-table-column>
      <el-table-column prop="usersite" label="联系地址" width="200"></el-table-column>
      <el-table-column prop="content" label="留言内容" width="320"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <!-- <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >回复</el-button>
        </template>-->
        <template slot-scope="scope">
          <el-button type="text" @click="open(scope.$index, tableData)" size="small">回复留言</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    // 让send和resetForm函数在页面加载完后就执行
    this.getmsg();
  },
  methods: {
    open(index, data) {
      this.$prompt("请输入回复内容", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          let myDate = new Date();
          let year = myDate.getFullYear();
          let month = myDate.getMonth() + 1;
          let date = myDate.getDate();
          let hours = myDate.getHours();
          let minutes = myDate.getMinutes();
          let seconds = myDate.getSeconds();
          let mydate = year + "/" + month + "/" + date;
          let mytime = hours + ":" + minutes + ":" + seconds;
         
          let msg={
            usertel:data[index].usertel,
            content:"商家:  " + value+"("+mytime+"-"+mydate+")------"
          }
          this.$http
          .get("http://localhost:9999/huifu", {
            params: {
              msg: msg
            }
          })
          .then(result => {
            // console.log(result.data);
           this.$message({
            type: "success",
            message: "回复成功! "
          });
          })
          .catch(function() {
            alert("回复失败");
          });

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    getmsg() {
      this.$http
        .get("http://localhost:9999/getmsg", {
          params: {}
        })
        .then(result => {
          // console.log(result.data);
          this.tableData = result.data;
        })
        .catch(function() {
          alert("失败");
        });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>