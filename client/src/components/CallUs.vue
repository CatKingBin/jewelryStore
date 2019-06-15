<template>
    <div id="app">
      <div class="header">
          <img src="http://img5.imgtn.bdimg.com/it/u=3189798789,3888485958&fm=26&gp=0.jpg" alt="">
        </div>
        <hr/>
        <ul>
          <li>“今生今饰”产品保养售后，如有任何疑问和加盟代理意向请联系我们</li>
          <li>地址：四川省成都市高新区</li>
          <li>电话：0731-00000000</li>
          <li>手机：13300000000</li>
          <li>联系人：王先生</li>
          <li>E-mail：email@email.mt</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"CallUs"
}
</script>
<style scoped>
.header>img {
  width: 100%;
  height: 400px;
}
.header {
  margin-bottom: 20px;
}
.body {
  margin-top: 20px;
  text-align: center;
}
ul li {
  text-align: center;
}
ul li:nth-child(1) {
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
}
ul li:nth-child(2),
ul li:nth-child(3),
ul li:nth-child(4),
ul li:nth-child(5) {
margin-top: 30px;
  font-size: 16px;
}
ul li:nth-child(6) {
  margin-top: 30px;
  margin-bottom: 60px;
  font-size: 16px;
}
</style>
