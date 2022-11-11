<template>
    <div class="card-mobile-sc">
        <div v-for="(data, index) in detail" :key="index">
        <div :class="data.cssCard" v-if="index === atPage"> 
                <div class="image-cointainer">
                    <div class="set-image">
                        <img v-if="atPage === 0" class="image-header" src="../../assets/couple-counseling.png" width="100" height="100" />
                        <img v-if="atPage === 1" class="image-header" src="../../assets/health-check.png" width="100" height="100" />
                        <img v-if="atPage === 2" class="image-header" src="../../assets/chat.png" width="100" height="100" />
                    </div>
                </div>
                <div class="text-container text-black font-bold text-center ml-3 mr-3">
                    {{data.text}}  
                </div>
            </div>
        </div>
        <div class="m-auto text-center text-white font-bold">
            {{atPage + 1}} / {{maxPage}} 
        </div>
    </div>
    <div class="card-com-sc">
        <div class="card-container-cm">
            <div class="card-com-1">
                <div class="iamge-c">
                    <img class="image-header" src="../../assets/couple-counseling.png" width="160" height="160" />
                </div>
                <div class="box-text-in"> 
                    <p class="text-in">{{detail[0].text}}</p>
                </div>
            </div>
            <div class="card-com-1">
                <div class="iamge-c">
                    <img class="image-header" src="../../assets/health-check.png"  width="160" height="160" />
                </div>
                <div  class="box-text-in">
                    <p class="text-in">{{detail[1].text}}</p>
                </div>
            </div>
            <div class="card-com-1">
                <div class="iamge-c">
                    <img class="image-header" src="../../assets/chat.png" width="160" height="160" />
                </div>
                <div  class="box-text-in"> 
                    <p class="text-in">{{detail[2].text}}</p>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    props:{
        atPage:Number
    },
    components:{
    },
    data(){
        return{
            detail:[
                {
                    // seft report 
                    cssCard: 'card-container-0',
                    pageNum: 1,
                    iconPath: '@/assets/health-check.png',
                    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    // tele med 
                    cssCard: 'card-container-1',
                    pageNum: 2,
                    iconPath:'@/assets/couple-counseling.png',
                    text:"A galley of type and scrambled it to make a type specimen book."
                },
                {
                    // find friend 
                    cssCard: 'card-container-2',
                    pageNum: 3,
                    iconPath:'@/assets/chat.png',
                    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
                }
            ],
            maxPage:null,
        }
    },
    computed(){

    },
    methods:{
        
    },
    mounted(){
        this.maxPage = this.detail.length;
    },
    updated(){
    }
}
</script>

<style scoped>
@media (max-width:480px)  { 
        .card-com-sc{
            display: none;
        }
        .card-container-0{
            border: 2px solid white;
            background: rgb(213, 213, 213);
            opacity: 0.9;
            border-radius: 10px;
            width: 60%;
            height: 250px;
            margin: auto;
            animation: fadeIn 2s;
        }

        .card-container-1{
            border: 2px solid white;
            background: rgb(213, 213, 213);
            opacity: 0.9;
            border-radius: 10px;
            width: 60%;
            height: 250px;
            margin: auto;
            animation: fadeIn 2s;
        }

        .card-container-2{
            border: 2px solid white;
            background: rgb(213, 213, 213);
            opacity: 0.9;
            border-radius: 10px;
            width: 60%;
            height: 250px;
            margin: auto;
            animation: fadeIn 2s;
        }
        .set-image{
            transform: translateY(-30px);
        }
        .image-header{
            text-align: center;
            margin: auto;
            background: rgb(213, 213, 213);
            opacity: 0.9;
            border-radius: 9999px;
            padding: 15px;
        }

        .text-container{
            transform: translateY(-30px);
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    }

@media (min-width: 481px) {
    .card-mobile-sc{
        display:none;
    }

    .card-com-sc{
        width: 80%;
        margin: auto;
    }

    .card-container-cm{
        margin-top: 150px;
        display: flex;
        justify-content: space-around;
        
    }
    
    .card-com-1{
        background: rgb(213, 213, 213);
        border-radius: 10px;
        opacity: 0.9;
        width: 450px;
        height: 500px;
    }

    .image-header{
        text-align: center;
        margin: auto;
        transform: translateY(-60px);
        background: rgb(213, 213, 213);
        border-radius: 999999px;
        padding: 20px;
    }
    .text-in{
        font-size: 23px;
        font-weight: bold;
    }
    .box-text-in{
        width: 80%;
        margin: auto;
    }
}
</style>