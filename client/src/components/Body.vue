<template>
  <div class="contain">
    <div class="top1">
        <div class="t1" @click="jump(obj1)"></div>
    </div>
    <div class="top2">
        <div class="t21" @click="jump(obj2)"></div>
        <div class="t22" @click="jump(obj3)"></div>
        <div class="t23" @click="jump(obj4)"></div>
        <div class="t24" @click="jump(obj5)"></div>
        <div class="t25" @click="jump(obj6)"></div>
        <div class="t26" @click="jump(obj7)"></div>
        <router-link class="t27" to='app'></router-link>
        <router-link class="t28" to='app'></router-link>
        <router-link class="t29" to='app'></router-link>
        <router-link class="t30" to='app'></router-link>
    </div>
    <div class="top3">
      <div class="t31" @click="jump(obj31)"></div>
      <div class="t32" @click="jump(obj32)"></div>
      <div class="t33" @click="jump(obj33)"></div>
      <div class="t34" @click="jump(obj34)"></div>
      <div class="t35" @click="jump(obj35)"></div>
      <div class="t36" @click="jump(obj36)"></div>
      <div class="t37" @click="jump(obj37)"></div>
      <div class="t38" @click="jump(obj38)"></div>
      <div class="t39" @click="jump(obj39)"></div>
    </div>
    <div class="top4"></div>
  </div>
</template>


<script>
export default {
  name: "Body",
  data(){
   return {
     obj1:{
        img:'https://gd2.alicdn.com/imgextra/i2/367859690/O1CN01qTn5yF2LS4N4L1taH_!!367859690.jpg_400x400.jpg',
        title:"饰悟银耳圈小圆圈圆环耳环女纯银耳钉女黑色情侣耳钉男单只耳环男",
        price:"68.00",
        sold:"88",
        inventory:"168件"
     },
     obj2:{
        img:'https://gd2.alicdn.com/imgextra/i2/367859690/O1CN01lqLmVH2LS4MH9F4hO_!!367859690.jpg_400x400.jpg',
        title:"【饰悟】925纯银别针耳环2019新款潮耳钉网红别针耳钉女酷帅银饰",
        price:"70.00",
        sold:"85",
        inventory:"178件"
     },
     obj3:{
        img:'https://gd4.alicdn.com/imgextra/i4/367859690/O1CN012LS4LR5732qYJFr_!!367859690.jpg_400x400.jpg',
        title:"饰悟韩版开口食指戒指女纯银网红潮人时尚个性可调节日式轻奢戒指",
        price:"63.00",
        sold:"78",
        inventory:"138件"
     },
     obj4:{
        img:'https://gd3.alicdn.com/imgextra/i3/367859690/O1CN01bezqHO2LS4OJj4VBW_!!367859690.jpg_400x400.jpg',
        title:"【定制】内在美同款定制项链女纯银定做名字硬币项链刻字项链男女情侣吊坠",
        price:"58.00",
        sold:"79",
        inventory:"179件"
     },
     obj5:{
        img:'https://gd4.alicdn.com/imgextra/i4/367859690/O1CN01S97O3V2LS4NCFh1Ds_!!367859690.jpg',
        title:"饰悟银饰可爱铃铛耳坠猫咪耳环女气质纯银耳钉女小众设计感耳环女",
        price:"56.00",
        sold:"68",
        inventory:"157件"
     },
     obj6:{
        img:'https://gd4.alicdn.com/imgextra/i4/367859690/O1CN012Q9c232LS4MeyXJXz_!!367859690.jpg',
        title:"星星设计感耳环小众纯银耳饰女925银耳钉女气质韩国个性简约耳圈",
        price:"44.00",
        sold:"82",
        inventory:"134件"
     },
     obj7:{
        img:'https://gd4.alicdn.com/imgextra/i4/367859690/TB23g7uatHO8KJjSZFHXXbWJFXa_!!367859690.jpg',
        title:"【定制】饰悟定做刻字手链定制名字母情侣手链女纯银一对韩版简约学生闺蜜",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj31:{
        img:'https://gd2.alicdn.com/imgextra/i2/367859690/O1CN01B82QvY2LS4PKqPg3n_!!367859690.jpg',
        title:"高级感耳夹女法式学生百搭耳夹无耳洞女耳骨夹耳钉男无耳洞耳环男",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj32:{
        img:'https://gd1.alicdn.com/imgextra/i1/367859690/O1CN01z27a682LS4MjkvEWL_!!367859690.jpg',
        title:"饰悟圈圈黑色耳钉女纯银耳圈女耳扣男士耳钉男潮小圆环圆圈耳环女",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj33:{
        img:'https://gd1.alicdn.com/imgextra/i3/367859690/O1CN01ttyVVK2LS4MtX496F_!!367859690.jpg',
        title:"【饰悟】925纯银银饰猪猪耳钉女红色设计感耳钉小众网红生肖猪女",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj34:{
        img:'https://gd4.alicdn.com/imgextra/i4/367859690/O1CN01LpwXbD2LS4Nj25z1Y_!!367859690.jpg',
        title:"饰悟后挂式星星纯银耳钉女气质韩国网红耳饰耳坠女耳环2019新款潮",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj35:{
        img:'https://gd3.alicdn.com/imgextra/i3/367859690/O1CN01keU5tX2LS4NEWVChT_!!367859690.jpg',
        title:"饰悟银饰三角形耳环会动的耳钉女纯银简约小巧短发耳饰耳坠女纯银",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj36:{
        img:'https://gd2.alicdn.com/imgextra/i2/367859690/O1CN012LS4LRLXKBLNp1K_!!367859690.jpg',
        title:"饰悟小珍珠耳环女耳坠女气质长款珍珠耳钉女纯银小耳坠女精致超仙",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj37:{
        img:'https://gd2.alicdn.com/imgextra/i2/367859690/O1CN01Cx3bCV2LS4Mje49ZW_!!367859690.jpg',
        title:"饰悟圆珠小耳坠精致超仙银耳钉女纯银短款会动的耳钉简约小巧耳饰",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj38:{
        img:'https://img.alicdn.com/imgextra/i2/367859690/TB2Z9wjoqAoBKNjSZSyXXaHAVXa_!!367859690.jpg',
        title:"饰悟草莓晶耳饰银耳环女气质耳链女樱花耳坠女长款耳线女纯银超仙",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     },
     obj39:{
        img:'https://gd3.alicdn.com/imgextra/i3/367859690/O1CN01FN89K62LS4N2EGFoV_!!367859690.jpg',
        title:"饰悟银饰长针纯银耳线女气质长款设计感小耳坠女精致网红小众耳饰",
        price:"48.00",
        sold:"56",
        inventory:"123件"
     }
   }
  },
  methods: {
    jump(obj){
      this.$router.push({path:'/jump',query:{img:obj.img,title:obj.title,price:obj.price,sold:obj.sold,inventory:obj.inventory}})
    }
  }
};
</script>


<style scoped>
.top1 {
  width: 100%;
  height: 1023px;
  margin-bottom: 20px;
  background-position: 47% center;
  background-size: cover;
  background-image: url(https://gdp.alicdn.com/imgextra/i1/367859690/O1CN01gfxr0g2LS4Nb7c8RZ_!!367859690.jpg);
}
.t1 {
  width: 100%;
  height: 1023px;
  cursor:pointer;
}
.top2 {
  position: relative;
  width: 100%;
  height: 1400px;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  background-image: url(https://gdp.alicdn.com/imgextra/i3/367859690/O1CN01B8kQAb2LS4NB3DUFb_!!367859690.jpg);
}
.t21,.t22,.t23,.t24,.t25,.t26 {
  position:absolute;
  width: 335px;
  height: 335px;
  cursor:pointer;
}
.t21 {
  top:134px;
  left: 115px;
}
.t22 {
  top:134px;
  left: 507px;
}
.t23 {
  top:134px;
  left: 898px;
}
.t24 {
  top:593px;
  left: 115px;
}
.t25 {
  top:593px;
  left: 507px;
}
.t26 {
  top:593px;
  left: 898px;
}
.t27,.t28,.t29,.t30 {
  position: absolute;
  width: 118px;
  height: 168px;
  bottom:137px;
}
.t27 {
  left: 249px;
}
.t28 {
  left: 491px;
  
}
.t29 {
  left: 741px;
   
}
.t30 {
  left: 984px;
}
.top3 {
  position: relative;
  width: 100%;
  height: 1477px;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  background-image: url(https://gdp.alicdn.com/imgextra/i4/367859690/O1CN01rlVjWf2LS4NdVdhCv_!!367859690.jpg);
}
.t31,.t32,.t33 {
  position: absolute;
  width: 253px;
  height: 185px;
  cursor: pointer;
 
}
.t31 {
  top: 311px;
  left: 196px;
}
.t32 {
  top: 311px;
  left: 562px;
}
.t33 {
  top: 311px;
  right: 157px;
}
.t34,.t35,.t36 {
  position: absolute;
  cursor: pointer;
  width: 271px;
  height: 273px;
}
.t34 {
  top: 607px;
  left: 172px;
}
.t35 {
  top: 607px;
  left: 567px;
}
.t36 {
  top: 607px;
  right:  123px;
}
.t37,.t38,.t39 {
  position:absolute;
  cursor: pointer;
  width:190px;
  height: 378px;
}
.t37 {
  top: 987px;
  left: 225px;
}
.t38 {
  top: 987px;
  left: 603px;
}
.t39 {
  top: 987px;
  right:  158px;
}

.top4 {
  width: 100%;
  height: 1094px;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  background-image: url(https://gdp.alicdn.com/imgextra/i1/367859690/O1CN01XpjdQa2LS4NflpseG_!!367859690.jpg);
}
</style>
