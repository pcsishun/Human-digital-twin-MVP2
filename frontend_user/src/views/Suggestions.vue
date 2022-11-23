<template>
    <div class="w-[95%] m-auto">
        <CognitiveAndEmotionalVue/>
        <div class="body-suggestions mt-5 mb-10 p-3 pt-5 pb-5 rounded-lg">
            <SuggestionsVue/>
        </div>
        <div>
            <BTNRedoVue/>
        </div>
    </div>
</template>

<script>
import CognitiveAndEmotionalVue from '../components/chart/CognitiveAndEmotional.vue';
import BTNRedoVue from '../components/btn_re_do/BTNRedo.vue';
import SuggestionsVue from '../components/suggestion/SuggestionsComponent.vue';

export default {
    components:{
        CognitiveAndEmotionalVue,
        BTNRedoVue,
        SuggestionsVue
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
.body-suggestions{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>