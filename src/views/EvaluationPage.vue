<template>
    <div>
        <div class="box" v-for="(li, index) in listData" :key="li.id">
            <div v-show="index == num">
                <p>{{ li.title }}</p>
                <ul>
                    <!-- 选项 -->
                    <van-radio-group v-model="checkedData" @change="checkedItem" >
                        <van-radio :name="item.id" v-for="item in li.option" :key="item.id">{{item.name}} </van-radio>
                    </van-radio-group>

                </ul>
            </div>

        </div>
        <van-row type="flex" justify="center" class="foot-btn">
            <van-col v-show="num !== 0" style="margin-right: 50px;">
                <van-button plain type="info" @click="toPrev()" >上一题</van-button>
            </van-col>
            <van-col v-show="num < listData.length-1">
                <van-button type="info" @click="toNext()" >下一题</van-button>
            </van-col>
            <van-col  v-show="num === listData.length-1">
                <van-button type="info"  @click="submit()" >提交答题</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import Toast from "vant/es/toast";
    export default {
        name: "EvaluationPage",
        data(){
            return {
                listData:[],
                num:0,
                currentChecked:'',
                resultData:[],
                checkedData:null
            }
        },
        created(){
            this.listData=[
                {
                    title:'第一题',
                    titleId:'1',
                    option:[
                        {name:'选项1',id:'1'},
                        {name:'选项2',id:'2'},
                        {name:'选项3',id:'3'},
                        {name:'选项4',id:'4'}
                        ]
                },
                {
                    title:'第二题',
                    titleId:'2',
                    option:[
                        {name:'选项1qqq',id:'1'},
                        {name:'选项2www',id:'2'},
                        {name:'选项3eee',id:'3'},
                        {name:'选项4rrrr',id:'4'}
                    ]
                }
            ]
        },
        methods:{
            // 选中一个选项
            checkedItem(data){
                console.log('选中的',data,this.listData[this.num])
                this.currentChecked = {
                    titleId:this.listData[this.num].titleId,
                    id:data
                }
                let index = this.resultData.findIndex(item=>{return item.titleId === this.currentChecked.titleId})
                if(index !==-1){
                    this.resultData[index].id = this.currentChecked.id
                }else{
                    this.resultData.push(this.currentChecked)
                }
            },
            // 上一题
            toPrev(){
                if(this.num >0){
                    this.num--
                }
                this.currentChecked = {
                    titleId:this.resultData[this.num].titleId,
                    id:this.resultData[this.num].id
                }
                this.checkedData = this.resultData[this.num].id
            },
            // 下一题
            toNext(){
                const nextNum = this.num+1
                this.checkedData = this.resultData[nextNum]?.id || null
                if(!this.currentChecked.id){
                    Toast('请选择一项');
                    return
                }
                if(this.num < this.listData.length-1){
                    this.num++
                    this.currentChecked={}
                }
            },
            // 提交
            submit(){
                if(!this.currentChecked.id){
                    Toast('请选择一项');
                    return
                }
                console.log('提交数据',this.resultData)
            }
        }
    }
</script>

<style scoped>
.foot-btn{
    position: fixed;
    width: 100vw;
    bottom: 2vh;
}
</style>
