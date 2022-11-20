<template>
    <div class="popup-container w-[700px] h-[450px] bg-white rounded-lg">
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
        <div class="w-[90%] m-auto mt-3">
            <div class="text-[16px] mb-3 font-bold">
                Status emotion:
            </div>
            <div class="text-[14px]">
                <span class="mr-3">
                    <label>normal: </label>
                    <input type="radio" name="status-select" v-model="statusEmotion" value="normal"/>
                </span>
                <span class="mr-3">
                    <label>alert: </label>
                    <input type="radio" name="status-select"  v-model="statusEmotion" value="alert"/>
                </span>
                <span class="mr-3">
                    <label>all: </label>
                    <input type="radio" name="status-select" v-model="statusEmotion" value="all"/>
                </span>
            </div>
        </div>
        <div class="w-[95%] mt-3 m-auto">
            <hr/>
        </div>
        <div class="department-container w-[90%] m-auto mt-3">
            <div class="text-[16px] mb-3 font-bold">
                Department: 
            </div>
            <div>
                <input class="" list="department-list"/>
                <datalist id="department-list">
                    <option>all</option>
                    <option>R&D</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Accounting</option>
                </datalist>
            </div>
        </div>
        <div class="w-[95%] mt-3 m-auto">
            <hr/>
        </div>
        <div class="position-container w-[90%] m-auto mt-3">
            <div class="text-[16px] mb-3 font-bold">
                Position: 
            </div>
            <div>
                <input class="" list="position-list"/>
                <datalist id="position-list">
                    <option>all</option>
                    <option>GM</option>
                    <option>Data-sci</option>
                    <option>Fullstack developer</option>
                    <option>Devops</option>
                </datalist>
            </div>
        </div>
        <div class="w-[95%] mt-3 m-auto">
            <hr/>
        </div>
        <div class="mt-10 text-center m-auto ">
            <button class="w-[200px] h-[40px] bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">Submit</button> 
        </div>
    </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            statusEmotion: "all",
            departmentSelect:"all",
            positionSelect: "all"
            
        }
    },
    methods:{
        haddleClosePopup(){
            this.$store.state.showPopupFilter = false
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
    .popup-container{
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    input{
        text-indent: 4px;
        border: 1px solid rgb(195, 193, 193);
        border-radius: 5px;
    }
</style>