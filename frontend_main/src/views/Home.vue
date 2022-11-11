<template>
    <div class="home-container-set">
        <div class="home-container">
            <div  class="mt-40 text-white text-4xl">
                <div class="set-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                <div class="set-qt-regs">
                    <button class="btn-regs">สมัครสมาชิก</button>
                </div>
            </div>
            <div class="news-activity-container">
                <CardDetail :atPage="pageNow" />
            </div>
            <div class="haddle-card-left" @click="haddleCardLeft">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 fill-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div class="haddle-card-right" @click="haddleCardRight">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 fill-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import CardDetail from "../components/cardDetail/CardDetail.vue"

export default {
    components:{
        CardDetail
    },
    data(){
        return{
            cardNumChange:1,
            pageNow:0
        }
    },
    watch:{

    },
    computed:{
        
    },
    methods:{
        haddleCardRight(){
            this.cardNumChange ++;
            this.pageNow = Math.abs(this.cardNumChange % 3)
            // console.log(this.pageNow)
        },
        haddleCardLeft(){
            this.cardNumChange --;
            this.pageNow = Math.abs(this.cardNumChange % 3)
            // console.log(this.pageNow)
        }
    },
    mounted(){
        // setInterval(() => {
        //     this.haddleCardRight()
        // }, 5000);
    },
    updated(){
        
        // console.log(this.pageNow)
    }
}
</script>

<style scoped>

    @media (max-width:480px)  { 
        .home-container{
            background-image: url('../assets/bg_main3_mobile.jpg');
            height: 150vh;
            /* background-position: center; */
            background-size: cover;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        } 
        .set-detail{
            width: 90%;
            margin-left: 10px;
        }

        .set-qt-regs{
            margin-top: 30px;
            margin-left: 10px;   
        }

        .btn-regs{
            border: 1px solid rgb(90, 90, 90);;
            background: rgb(151, 151, 151);
            border-radius: 10px;
            width: 160px;
            height: 50px;
            margin-top: 5px;
            font-size: 20px;
        }
        .news-activity-container{
            color:white;
            margin-top: 100px;
            margin-left: 10px;
        }
        .card-container{
            border: 2px solid white;
            background: rgb(213, 213, 213);
            opacity: 0.9;
            border-radius: 10px;
            width: 60%;
            height: 250px;
            margin: auto;
        }
        .haddle-card-left {
            position: absolute;
            transform: translateY(-150px);
            
        }

        .haddle-card-right {
            position: absolute;
            right: 0;
            transform: translateY(-150px);
        }
    }

    @media (min-width: 481px) {
        .home-container{
            background-image: url('../assets/bg-main2.jpg');
            background-size: cover;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }

        .set-detail{
            width: 40%;
            margin-left: 10%;
        }

        .set-qt-regs{
            margin-top: 30px;
            margin-left: 10%;
            
        }
        .btn-regs{
            border: 1px solid white;
            border-radius: 10px;
            width: 180px;
            height: 60px;
            margin-top: 15px;
            font-size: 25px;
        }

        .haddle-card-left{
            display: none;
        }

        .haddle-card-right{
            display: none;
        }
    }

    .btn-regs:hover{
        background: rgb(135, 135, 135);
    }

    
</style>