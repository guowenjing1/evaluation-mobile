<template>
    <div class="home-wrap">
        <van-button class="btn" type="info" block @click="gotoEvaluation">进入测试</van-button>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data(){
            return{

            }
        },
        methods:{
            // 跳转测评
            gotoEvaluation(){
                this.$router.push('./evaluationPage')
            }
        }
    }
</script>

<style scoped>
.home-wrap{
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/bg.jpg");
    background-size: contain;
}
.btn{
    position: fixed;
    bottom: 0;
}
</style>
