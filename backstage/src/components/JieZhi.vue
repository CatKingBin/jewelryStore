<template>
  <div>
    <div style="position:relative">
      <el-col :span="24" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder="请输入关键字" v-model="storename"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="fond">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--新增界面-->
      <div :style="xinzeng" v-if="flag">
        <el-form
          :model="ruleForm2"
          status-icon
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="图片地址" prop="pass">
            <el-input type="text" v-model="ruleForm2.src" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品描述" prop="checkPass">
            <el-input type="text" v-model="ruleForm2.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="age">
            <el-input type="text" v-model="ruleForm2.price"></el-input>
          </el-form-item>
          <el-form-item label="增加数量" prop="checkPass">
            <el-input type="text" v-model="ruleForm2.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleForm2)">提交</el-button>
            <el-button @click="resetForm">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 数据表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="selsChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="address" label="图片地址" width="230" show-overflow-tooltip></el-table-column>
      <el-table-column prop="title" label="商品描述" width="230" show-overflow-tooltip></el-table-column>
      <el-table-column prop="price" label="商品价格" width="200"></el-table-column>
      <el-table-column prop="inventory" label="商品库存" width="200"></el-table-column>
      <el-table-column label="管理操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-button type="danger" @click="delAll" :disabled="this.sels.length<2">批量删除</el-button>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="7"
        :total="total"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "JieZhi",
  data() {
    return {
      total: 0,
      page: 1,
      storename: "",
      flag: true, //新增界面是否显示
      ruleForm2: {
        //添加的数据
        src: "",
        title: "",
        price: "",
        number: ""
      },
      xinzeng: {
        //新增界面的样式
        position: "absolute",
        width: "600px",
        height: "400px",
        background: "whitesmoke",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
        left: "20%",
        top: "60px"
      },
      sels: [], //列表选中列
      tableData: [],
      multipleSelection: []
    };
  },

  mounted() {
    // 让send和resetForm函数在页面加载完后就执行
    this.resetForm();
    this.getNecklaceNum(this.page)
  },

  methods: {
    fond() {
      //查询触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/jiezhifond", {
          params: {
            storename: this.storename //请求携带的参数
          }
        })
        .then(result => {
          //请求成功
          //  console.log(result.data)
          this.storename = "";
          this.tableData = []; //清空数据列表
          for (var i = 0; i < result.data.length; i++) {
            //使用循环插入请求得到的数据
            var obj = {}; //创建一个空对象接收数据
            obj.address = result.data[i].img;
            obj.title = result.data[i].title;
            obj.price = result.data[i].price;
            obj.inventory = result.data[i].inventory;
            obj.id = result.data[i].id;
            this.tableData.push(obj); //将对象添加到数组列表中
          }
        })
        .catch(function() {
          //请求失败
          alert("查找失败");
        });
    },
    handleAdd() {
      //新增按钮触发函数
      this.flag = !this.flag;
    },
    resetForm() {
      //新增界面取消时触发函数
      this.flag = false;
      this.ruleForm2.src = "";
      this.ruleForm2.title = "";
      this.ruleForm2.price = "";
      this.ruleForm2.number = "";
    },
    submitForm(formName) {
      //新增提交触发函数，formName是提交的数据（一个对象）
      this.$http //发起ajax请求
        .get("http://localhost:9999/jiezhiadd", {
          params: {
            obj: formName //请求携带的参数
          }
        })
        .then(result => {
          //请求成功
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.resetForm();
          this.getNecklaceNum(this.page)
        })
        .catch(function() {
          //请求失败
          alert("添加失败");
        });
    },
    send(index) {
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/jiezhi", {
         params:{
             index:index
         } 
        })
        .then(result => {
          //请求成功
          this.tableData = []; //清空数据列表
            for (var i = 0; i < result.data.length; i++) {
              //使用循环插入请求得到的数据
              var obj = {}; //创建一个空对象接收数据
              obj.address = result.data[i].img;
              obj.title = result.data[i].title;
              obj.price = result.data[i].price;
              obj.inventory = result.data[i].inventory;
              obj.id = result.data[i].id;
              this.tableData.push(obj); //将对象添加到数组列表中
            }
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
    },
    getNecklaceNum(val){
      //页面加载完时触发函数
      this.$http //发起ajax请求
        .get("http://localhost:9999/jiezhiNum", {})
        .then(result => {
          //请求成功
          this.total = result.data.length;
          this.send(val);
        })
        .catch(function() {
          //请求失败
          alert("失败");
        });
    },
    selsChange: function(sels) {
      //多选框选中时触发函数
      this.sels = sels; //将选中的数据放入sels
    },
    delAll: function() {
      //批量删除按钮触发函数
      var arrid = []; //创建一个空数组来装载要传出的数据
      for (var i = 0; i < this.sels.length; i++) {
        //将选中的数据循环出来
        arrid.push(this.sels[i].id); //将每个数据的id 放入要传出的数组中
      }
      // 传一个数组出去
      this.$confirm("确认删除这些记录吗?", "提示", {
        //弹框
        type: "warning"
      })
        .then(() => {
          //弹框"确定"按钮触发函数
          this.$http //发起ajax请求
            .get("http://localhost:9999/jiezhidelall", {
              params: {
                arrid: arrid //携带的参数（一个数组）
              }
            })
            .then(result => {
              //请求成功
              this.$message({
                //弹框
                message: "删除成功",
                type: "success"
              });
              if(this.tableData.length==this.sels.length){
                    this.page=this.page-1
                    this.getNecklaceNum(this.page)
              }else{
                this.getNecklaceNum(this.page)
              }
            })
            .catch(function() {
              //请求失败
              alert("失败");
            });
        })
        .catch(() => {}); //弹框"取消"按钮触发函数
    },
    handleDel: function(index, row) {
      //删除按钮触发函数
      if (this.sels.length != 0) {
        //只有被选中时才能执行删除操作
        //  index表示对象下标,row表示选中的对象
        this.$confirm("确认删除该记录吗?", "提示", {
          //弹框
          type: "warning"
        })
          .then(() => {
            //弹框确定按钮触发
            this.$http //发起ajax请求
              .get("http://localhost:9999/jiezhidel", {
                params: {
                  id: row.id //携带的参数（所选数据的id）
                }
              })
              .then(result => {
                //请求成功
                this.$message({
                  //弹框
                  message: "删除成功",
                  type: "success"
                });
                if(this.tableData.length==1){
                  this.page=this.page-1
                  this.getNecklaceNum(this.page)
                }else{
                  this.getNecklaceNum(this.page)
                }
              })
              .catch(function() {
                //请求失败
                alert("失败");
              });
          })
          .catch(() => {}); //弹框取消按钮触发
      }
    },
    handleCurrentChange(val) {
      this.page = val;
      this.send(val);
    }
  }
};
</script>

<style>
.toolbar {
  display: flex;
  justify-content: space-between;
}
</style>