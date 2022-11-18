<template>
    <div class="home-container">
        <div class="set-title text-[24px] h-[80px] text-black font-bold">
            <div class="ml-10 translate-y-5">Company overview</div>
        </div>
        <div class="w-[95%] m-auto mb-5">
            <hr/>
        </div>  
        <div class="grid grid-cols-2 ml-10 mr-10 gap-x-[50px] overflow-y-scroll h-[90vh] pb-[50px]">
            <div class="card1">

                <div class="set-card rounded-lg p-10">
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Emotion: Self-reported
                        <hr/>
                    </div>
                    <div class="set-chart">
                        <div>
                            <img src="../assets/good.png" width="30" height="30"/>
                        </div>
                        <BarChart/>
                        <div>
                            <img src="../assets/bad.png" width="30" height="30"/>
                        </div>
                    </div>
                </div>

                <div class="set-card rounded-lg p-10 mt-10">
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Cognitive: Sentiment Analysis
                        <hr/>
                    </div>
                    <div class="set-chart">
                        <div>
                            <img src="../assets/good.png" width="30" height="30"/>
                        </div>
                        <ScaleSentiment/>
                        <div>
                            <img src="../assets/bad.png" width="30" height="30"/>
                        </div>
                    </div>
                </div>

                <div class="set-card rounded-lg p-10 mt-10">
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Physiological signals
                        <hr/>
                    </div>
                    <div class="set-chart text-[18px]" v-if="$store.state.buinessUnit === 'SCG'">
                        <div class="body-score grid grid-cols-3">
                            <h1>Body score:</h1>
                            <h2>75</h2>
                            <h2>Percent</h2>
                        </div>
                        <div class="sleep-score grid grid-cols-3">
                            <h1>Sleep score:</h1>
                            <h2>65</h2>
                            <h2>Percent</h2>
                        </div>
                        <div class="hrv-score grid grid-cols-3">
                            <h1>HRV:</h1>
                            <h2>45</h2>
                            <h2>Per minute</h2>
                        </div>
                        <div class="hrt-score grid grid-cols-3">
                            <h1>Heart rate:</h1>
                            <h2>78</h2>
                            <h2>Per minute</h2>
                        </div>
                    </div>
 
                    <div class="set-chart text-[18px]" v-if="$store.state.buinessUnit === 'Nexter'">
                        <div class="body-score grid grid-cols-3">
                            <h1>Body score:</h1>
                            <h2>65</h2>
                            <h2>Percent</h2>
                        </div>
                        <div class="sleep-score grid grid-cols-3">
                            <h1>Sleep score:</h1>
                            <h2>55</h2>
                            <h2>Percent</h2>
                        </div>
                        <div class="hrv-score grid grid-cols-3">
                            <h1>HRV:</h1>
                            <h2>30</h2>
                            <h2>Per minute</h2>
                        </div>
                        <div class="hrt-score grid grid-cols-3">
                            <h1>Heart rate:</h1>
                            <h2>48</h2>
                            <h2>Per minute</h2>
                        </div>
                    </div>

                </div>

            </div>
            <div class="card2">

                <div class="set-card rounded-lg p-10">
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Emotion: Facial-expressed
                        <hr/>
                    </div>
                    <div class="set-chart">
                        <div>
                            <img src="../assets/good.png" width="30" height="30"/>
                        </div>
                        <EmotionDetect/>
                        <div>
                            <img src="../assets/bad.png" width="30" height="30"/>
                        </div>
                    </div>
                </div>

                <div class="set-card rounded-lg p-10 mt-10">
                    
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Cognitive: WordCloud
                        <hr/>
                    </div>
                    <div class="set-chart" >
                        <WordCloud/>
                    </div>
                </div>

                <div class="set-card rounded-lg p-10 mt-10">
                    <div class="text-right mb-5 text-[18px] font-bold">
                        Comments
                        <hr/>
                    </div>
                    <div class="set-chart">
                        <textarea class="border border-gray-600 rounded-lg w-[100%] h-[200px]"></textarea>
                        <div class="text-right mt-10">
                            <button class="bg-cyan-500 w-[150px] h-[60px] text-[18px] text-white rounded-lg hover:bg-cyan-600 active:bg-cyan-700">Save</button>
                            <button class="bg-red-500 w-[150px] h-[60px] text-[18px] text-white rounded-lg ml-5 hover:bg-red-600 active:bg-red-700">Clear</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '../components/chart/selfreport/Barchart.vue'
import EmotionDetect from '../components/chart/emotionDetect/EmotionDetect.vue'
import ScaleSentiment from '../components/chart/scaleSentiment/ScaleSentiment.vue'
import WordCloud from '../components/chart/wordCloud/WordCloud.vue'

export default {
    components:{
        BarChart,
        EmotionDetect,
        ScaleSentiment,
        WordCloud
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.set-card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>