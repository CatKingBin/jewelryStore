<template>
    <div>
         <div class="bottom">
             <img src="http://a1.jmstatic.com/07c1f8519c836ade/footer_dy.jpg" alt="图片加载失败">
             <div class="txt">版权所有 Copyright © 2007-2018 iFashion all rights reserved Powered by iFashion. 粤ICP备07502554号-1 </div>
         </div>
    </div>
</template>

<script>
export default {
     name: "Foot"
}
</script>

<style scoped>
  .bottom {
      position: relative;
  }
  .bottom>img{
      width: 100%;
      height: 100px;
  }
  .txt {
      width: 100%;
      position: absolute;
      bottom: 15px;
      left: auto;
      text-align: center;
  }
</style>
