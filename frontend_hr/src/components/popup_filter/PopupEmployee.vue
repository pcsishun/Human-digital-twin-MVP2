<template>
    <div class="employee-container overflow-y-scroll">
        <div class="text-right mr-3 mt-3">
            <button @click="haddleClosePopup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="w-[95%] mt-3 m-auto">
            <hr/>
        </div>
        <div class="avatar ml-10 mt-5 grid grid-cols-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[200px] h-[200px]">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="employee-detail">
                <div class="name font-bold mt-10">
                    <label>Name: </label>
                    {{$store.state.popupEmployeeDetail.name}}
                </div>
                <div class="department mt-5 font-bold">
                    <label>Department: </label>
                    {{$store.state.popupEmployeeDetail.department}}
                </div>
                <div class="position mt-5 font-bold">
                    <label>Position: </label>
                    {{$store.state.popupEmployeeDetail.position}}
                </div>
            </div>
        </div>
        <div class="w-[96%] mt-3 m-auto grid grid-cols-2">
            <div class="set-card rounded-lg p-3 mr-3">
                <Barchart/>
            </div>
            <div  class="set-card rounded-lg p-3">
                <ScaleSentiment/>
            </div>
        </div>
        <div class="set-card rounded-lg p-3 w-[95%] mt-3 m-auto pb-10">
            <Comment/>
        </div>
        <div class="pb-10"></div>
    </div>
</template>

<script>
import Barchart from '../chart/selfReport/BarchartPerson.vue'
import ScaleSentiment from '../chart/scaleSentiment/ScaleSentimentPerson.vue'
import Comment from '../comment/Comment.vue'

export default {
    components:{
        Barchart,
        ScaleSentiment,
        Comment
    },
    data(){
        return{

        }
    },
    methods:{
        haddleClosePopup(){
            this.$store.state.showPopupEmployee = false
            this.$store.state.popupEmployeeDetail = {
                pic: "",
                name: "",
                department: "",
                position: "",
                alertStatus: null
            }
        }
    }
}
</script>

<style scoped>
.employee-container{
    position: fixed;
    width: 700px;
    height: 750px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    
}
.set-card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>