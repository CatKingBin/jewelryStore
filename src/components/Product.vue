<template>

	<!--<h1>{{msg}}</h1>-->
	<el-container>
		<el-header :style="header">
			<div>ADMIN</div>
			<el-dropdown size="medium" split-button type="primary">
				用户名
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>我的消息</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<el-dropdown-item>
						<el-button type="text" @click="centerDialogVisible = true">退出登录</el-button>
						<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
							<span>您确定退出吗？</span>
							<span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
              </span>
						</el-dialog>
					</el-dropdown-item>

				</el-dropdown-menu>
			</el-dropdown>
		</el-header>

		<el-container>
			<el-aside>
				<el-row class="tac">
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航一</span>
								</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
								<i class="el-icon-document"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
						</el-menu>
				</el-row>

			</el-aside>
			<el-main>main</el-main>
		</el-container>
	</el-container>

</template>

<script>
	export default {
		name: 'Product',
		data() {
			return {
				centerDialogVisible: false,
				header: {
					height: "60px",
					color: "white"
				},
				msg: this.$route.query.name
			}
		},
		 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.el-header {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
		background-color: #20A0FF;
		color: #333;
		text-align: center;
	}
	
	.el-header>div:first-child {
		font-size: 20px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		height: 800px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
	}
</style>