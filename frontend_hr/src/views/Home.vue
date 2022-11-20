<template>
    <div class="home-container">
        <div class="set-title text-[24px] h-[80px] text-black font-bold grid grid-cols-2">
            <div class="ml-10 translate-y-5 text-left">Company overview</div>
            <!-- <div class="text-right mr-20 mt-5">
                <button @click="haddleToInsight" class="btn-insight bg-teal-600 hover:bg-teal-700 w-[150px] h-[40px] text-white rounded-lg text-[15px]">
                    Insight Analysis
                </button>
            </div> -->
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
                        <Comment/>
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
import Comment from '../components/comment/Comment.vue'

export default {
    components:{
        BarChart,
        EmotionDetect,
        ScaleSentiment,
        WordCloud,
        Comment
    },
    data(){
        return{

        }
    },
    methods:{
        haddleToInsight(){
            this.$router.push("/insight")
        }
    }
}
</script>

<style scoped>
.set-card{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.btn-insight{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.btn-insight:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
</style>