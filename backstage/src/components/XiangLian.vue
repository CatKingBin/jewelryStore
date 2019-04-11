<template>
	<div>
		<div style="margin-top: 20px">
          <el-button type="primary">批量删除</el-button>
          <el-button type="primary"@click="add">新增产品</el-button>
          <div></div>
        </div>
		 <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection"width="55"></el-table-column>
          <el-table-column
           prop="address"
           label="图片地址"
           width="230"
           show-overflow-tooltip>
          </el-table-column>
          <el-table-column
           prop="title"
           label="商品描述"
           width="230"
           show-overflow-tooltip>
          </el-table-column>
          <el-table-column
           prop="price"
           label="商品价格"
           width="200">
          </el-table-column>
          <el-table-column
           prop="inventory"
           label="商品库存"
           width="200">
          </el-table-column>
          <el-table-column label="管理操作">
              <template slot-scope="scope">
                 <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
        
        <el-pagination
         background
         layout="prev, pager, next"
         :total="50">
        </el-pagination>
    </div>
	
</template>

<script>
	export default {
		name:"XiangLian",
		 data() {
      return {
        tableData: [],
        multipleSelection: []
      }
    },
    
//   让send函数在页面加载完后就执行
    mounted() {
      this.send();
    },
    methods: {
    	add(){
    		 this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    	},
      send() {
      this.$http
        .get("http://localhost:9999/xianglian", {
          params: {
            name: "",
            pwd: ""
          }
        })
        .then(result => {
          console.log(result.data);
          this.tableData=[]
          for(var i=0;i<result.data.length;i++){
          		var obj={}
          			obj.address=result.data[i].img;
          	        obj.title=result.data[i].title;
          	        obj.price=result.data[i].price;
          	        obj.inventory=result.data[i].inventory;
          	        obj.id=result.data[i].id;
          	        this.tableData.push(obj)
          }
        })
        .catch(function() {
          alert("失败");
        });
       },
      handleDel: function (index, row) {
//    	            index表示对象下标,row表示选中的对象
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					console.log(row.id)
				this.$http
                  .get("http://localhost:9999/xiangliandel", {
                        params: {
                          id: row.id
                         }
                       })
                  .then(result => {
                  	this.$message({
							message: '删除成功',
							type: 'success'
						});
                  	this.send();
                  })
                  .catch(function() {
                   alert("失败");
                   });
//					removeUser(para).then((res) => {
//						this.listLoading = false;
//						//NProgress.done();
//						this.$message({
//							message: '删除成功',
//							type: 'success'
//						});
//						this.getUsers();
//					});
				}).catch(() => {

				});
			},
        
    }
}
</script>

<style>
</style>