<template>
    <div class="">
        <div class="w-[350px] m-auto">
            <WeatherVue/>
        </div>
        <div class="set-chart w-[350px] p-[15px] m-auto rounded-lg">
            <div class="text-[14px] font-bold mt-5 mb-5">How are you feeling today ?</div>
            <div><img src="../assets/good.png" width="20" height="20"/></div>
            <ChartLineVue/>
            <div><img src="../assets/bad.png" width="20" height="20"/></div>
        </div>
        <div class="set-info w-[350px] m-auto mt-[50px] p-[15px] rounded-lg">
            <EmerAlertVue/>
            <CognitiveAndEmotionalVue/>
        </div>
        <BTNRedoVue/>
    </div>
</template>

<script>
import ChartLineVue from '../components/chart/ChartLine.vue';
import WeatherVue from '../components/weather/Weather.vue';
import EmerAlertVue from '../components/alert/EmerAlert.vue';
import CognitiveAndEmotionalVue from '../components/chart/CognitiveAndEmotional.vue';
import BTNRedoVue from '../components/btn_re_do/BTNRedo.vue';

export default {
    components:{
        ChartLineVue,
        WeatherVue,
        EmerAlertVue,
        CognitiveAndEmotionalVue,
        BTNRedoVue
    },
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style scoped>



.set-chart{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.set-info{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>