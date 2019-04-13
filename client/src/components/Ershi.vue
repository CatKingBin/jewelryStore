<template>
    <div class="container">
        <div class="top">
            <div class="topimg1"></div>
            <div class="topimg2"></div>
            <div class="topimg3"></div>
        </div>
        <div class="center">
            <div class="left"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Ershi'
}
</script>

<style scoped="scoped">
   .container {
       width: 100%;
   }
   .top {
       width: 100%;
       height: 300px;
       background-position: center;
       position: relative;
       margin-top: 72px;
       margin-bottom: 180px;
       opacity: 0.7;
       background-size: contain;
       background-image: url(http://img4.imgtn.bdimg.com/it/u=2496227324,3461031432&fm=26&gp=0.jpg);
   }
   .topimg1 {
       width: 200px;
       height: 200px;
       position: absolute;
       background-position: center;
       background-size: cover;
       top: 65%;
       left: 25%;
       z-index: 99;
       background-image: url(http://img0.imgtn.bdimg.com/it/u=541665049,679696133&fm=26&gp=0.jpg)
   }
    .topimg2 {
       width: 250px;
       height: 250px;
       position: absolute;
       background-position: center;
       background-size: cover;
       top: 20%;
       left: 38%;
       background-image: url(http://img0.imgtn.bdimg.com/it/u=2736817597,1922491119&fm=26&gp=0.jpg)
   }
   .topimg3 {
       width: 200px;
       height: 200px;
       position: absolute;
       background-position: center;
       background-size: cover;
       top: 65%;
       left: 55%;
       background-image: url(http://img5.imgtn.bdimg.com/it/u=3386306103,3030630408&fm=26&gp=0.jpg)
   }
   .center {
       width: 100%;
       height: 400px;
       display: flex;
        
       background-color: blueviolet;
   }
</style>
