<template>
    <div class="box">
        <h1>{{this.$route.query.obj}}</h1>
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
    height: 50px;
}
</style>
