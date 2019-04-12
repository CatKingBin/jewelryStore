<template>
	<el-container>
		<el-header :style="header">
        <el-col :span="24">
			<el-col :lg="3" :md="4" :sm="4" :xs="6">
				ADMIN
			</el-col>
			<el-col :lg="18":md="16" :sm="16" :xs="12">首饰商店</el-col>
			<el-col :lg="3" :md="4" :sm="4" :xs="6">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :style="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554908763224&di=fbbfaaff22012cdd5c9c2cbb861ef005&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130804%2F7487939_090818211000_2.jpg"/><span :style="span">用户名</span></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		</el-header>
		
		<el-container>
		<el-aside :style="aside">
			<el-row :style="tac">
                <el-col :span="24">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>所有商品</span>
        </template>
        <el-menu-item-group>
          <router-link to="/xianglian"><el-menu-item index="1-1">项链</el-menu-item></router-link>
          <router-link to="/ershi"><el-menu-item index="1-2">耳饰</el-menu-item></router-link>
          <router-link to="/shoushi"><el-menu-item index="1-3">手饰</el-menu-item></router-link>
          <router-link to="/jiezhi"><el-menu-item index="1-4">戒指</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
			<router-link to="/yhhd">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">优惠活动</span>
      </el-menu-item>
			</router-link>
			<router-link to="/look">
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">查看更多</span>
      </el-menu-item>
			</router-link>
        </el-menu>
             </el-col>
              </el-row>
		</el-aside>
			
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>

</template>

<script>
	export default {
		name: 'Product',
		data() {
			return {
				span:{
					color:"white",
					fontSize:"16px",
					paddingLeft:"10px"
				},
				img:{
					height:"50px",
					width:"50px",
					borderRadius:"50%",
					verticalAlign: "middle"
				},
				aside:{
					width:"250px"
				},
				tac:{
					marginTop:"20px"
				},
				centerDialogVisible: false,
				header: {
					height: "60px",
					color: "white"
				},
				msg: this.$route.query.name
				
			}
		},
		 methods: {
		 	logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/');
				}).catch(() => {
				});
			},
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>


<style scoped>
	a{
		color: white;
		text-decoration: none;
	}
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
		height: 565px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
	}
</style>