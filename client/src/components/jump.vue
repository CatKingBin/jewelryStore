<template>
    <div class="box">
        <h1>{{this.$route.query.img}}</h1>
        <h1>{{this.$route.query.title}}</h1>
        <h1>{{this.$route.query.price}}</h1>
        <h1>{{this.$route.query.sold}}</h1>
    </div>
</template>

<script>
export default {
    name:'jump'
}
</script>

<style>
.box {
    margin-top: 72px;
    width: 100%;
    
}
</style>
