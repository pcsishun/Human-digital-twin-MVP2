<template>
    <div class="employee-container overflow-y-scroll h-[300px] p-5">
        <div class="result-card grid grid-cols-3">
            <div class="mt-5 set-card rounded-lg p-3 mr-3">
                <Barchart/>
            </div>
            <div class="mt-5 set-card rounded-lg p-3 mr-3">
                <ScaleSentiment/>
            </div>
            <div class="mt-5 set-card rounded-lg p-3 mr-3">
                <WordCloud/>
            </div>
        </div>
        <div class="">
            <div class="employee-card set-card mt-5 p-3">
                <div class="mb-5 ml-5 font-bold">Employee list</div>
                <div>
                    <table class="w-[100%]">
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th></th>
                        </tr>
                        <tr v-for="(data, index) in $store.state.listEmployee" :key="index" >

                            <td class="emergency-list" v-if="data.alertStatus === true">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                </svg>
                            </td>
                            <td class="emergency-list" v-if="data.alertStatus === true">{{data.name}}</td>
                            <td class="emergency-list" v-if="data.alertStatus === true">{{data.department}}</td>
                            <td class="emergency-list" v-if="data.alertStatus === true">{{data.positon}}</td>
                            <td v-if="data.alertStatus === true">
                                <button  @click="haddleShowData(data.pic, data.name, data.department, data.positon, data.alertStatus)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                    </svg>
                                </button>
                            </td>

                            <td  v-if="data.alertStatus === false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                </svg>
                            </td>
                            <td  v-if="data.alertStatus === false">{{data.name}}</td>
                            <td  v-if="data.alertStatus === false">{{data.department}}</td>
                            <td  v-if="data.alertStatus === false">{{data.positon}}</td>
                            <td  v-if="data.alertStatus === false">
                                <button @click="haddleShowData(data.pic, data.name, data.department, data.positon, data.alertStatus)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <div class="comment-card">
                
            </div>
        </div>
        
    </div>  
</template>

<script>
import Barchart from '../chart/selfreport/BarchartPerson.vue';
import ScaleSentiment from '../chart/scaleSentiment/ScaleSentimentPerson.vue';
import WordCloud from '../chart/wordCloud/WordCloud.vue';



export default {
    components:{
        Barchart,
        ScaleSentiment,
        WordCloud,
        // PopupEmployee
    },
    data(){
        return{
            
        }
    },
    methods:{   
        haddleShowData(pic, name, department, position, alertStatus){
            this.$store.state.popupEmployeeDetail = {
                pic: pic,
                name: name,
                department: department,
                position: position,
                alertStatus: alertStatus
            }
            this.$store.state.showPopupEmployee = true
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.employee-container{
    width: 95%;
    margin:auto;
    min-height: 500px;
    max-height: 900px;
}
.set-card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

th, td {
    padding: 15px;
    text-align: left;
  }

.emergency-list {
    background: rgb(229, 87, 87);
    color: white;
    margin-bottom: 3px;
    margin-top: 3px;
    -webkit-animation: blink-animation 1s infinite;
    -moz-animation: blink-animation 1s infinite;
    -o-animation: blink-animation 1s infinite;
    animation: blink-animation 1s infinite;
}

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

</style>