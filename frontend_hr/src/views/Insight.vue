<template>
    <div class="insight-container">
        <PopupFilter v-if="$store.state.showPopupFilter === true"/>
        <PopupEmployee v-if="$store.state.showPopupEmployee === true"/>
        <div class="set-title text-[24px] h-[80px] text-black font-bold ">
            <div class="ml-10 mt-5 text-left">Employee filter</div>
            <div class="ml-10 mt-3 flex">
                <div class="flex text-[15px] mr-5 ">
                    <div class="mr-3 flex">
                        <div class="label-set mr-3 bg-gray-400 w-[150px]">
                            <div class=" mt-2 text-center text-white">Start date:</div>
                        </div>
                        <input type="date" class="border border-gray-700 rounded-lg w-[150px]"/>
                    </div>
                    <div class="flex">
                        <div class="label-set mr-3 bg-gray-400 w-[150px]">
                            <div class=" mt-2 text-center text-white">Due date: </div>
                        </div>
                        <input type="date" class="border border-gray-700 rounded-lg w-[150px]"/>
                    </div>
                </div>
                <div class="border-l border-gray-600 mr-5"></div>
                <button @click="haddleOpenPopup"  class="mr-3 btn-insight bg-teal-600 hover:bg-teal-700 w-[150px] h-[40px] text-white rounded-lg text-[15px]">
                    <div class="flex justify-center">
                        <span class="mr-3">Filter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </button>
                <button  class=" mr-3 btn-insight bg-teal-600 hover:bg-teal-700 w-[40px] h-[40px] text-white rounded-full text-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto">
                        <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-[95%] m-auto mb-5 mt-10">
            <hr/>
        </div> 
        <div class="body-insight">
            <div class="mt-5 mb-5 text-[20px] font-bold w-[95%] m-auto">
                Business overview
            </div>
            <div class="body-container">
                <div class="set-card rounded-lg p-3">
                    <div>
                        <img src="../assets/good.png" width="30" height="30"/>
                    </div>
                    <Barchart/>
                    <div>
                        <img src="../assets/bad.png" width="30" height="30"/>
                    </div>
                </div>
                <div class="set-card rounded-lg p-3">
                    <ScaleSentiment/>
                </div>
                <div class="set-card rounded-lg p-3">
                    <WordCloud/>
                </div>
            </div>
            <div class="mt-5 mb-5 w-[95%] m-auto"><hr/></div>
            <div class="body-depart-container">
                <div class="mt-5 mb-5 text-[20px] font-bold w-[95%] m-auto">
                    Employee overview
                </div>
                <div>
                    <Employee/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopupFilter from '../components/popup_filter/PopupFilter.vue'
import Barchart from '../components/chart/selfReport/Barchart.vue'
import ScaleSentiment from '../components/chart/scaleSentiment/ScaleSentiment.vue'
import WordCloud from '../components/chart/wordCloud/WordCloud.vue'
import Employee from '../components/employee/Employee.vue'
import PopupEmployee from '../components/popup_filter/PopupEmployee.vue';

export default {
    components:{
        PopupFilter,
        Barchart,
        ScaleSentiment,
        WordCloud,
        Employee,
        PopupEmployee
    }, 
    data(){
        return{
            
        }
    },
    methods:{
        haddleOpenPopup(){
            this.$store.state.showPopupFilter = true
        }
    },
    mounted(){

    }
}

</script>

<style scoped>
    .label-set{
        border-radius: 10px;
    }

    input{
        text-indent: 5px;
    }
    .body-container{
        display: grid;
        grid-template-columns:  1fr 1fr 1fr;
        width: 95%;
        grid-column-gap: 10px;
        margin: auto;
        
    }
    .set-card{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }






</style>