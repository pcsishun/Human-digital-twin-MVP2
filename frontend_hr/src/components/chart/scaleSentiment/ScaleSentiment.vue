<template>
    <div class="scale-container">
        <canvas id="scale-sentiment"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    components:{

    },
    data(){
        return{
            storeChartFunc:null,
            mockDataSCG:{
                type: "line",
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
                        datasets: [
                        {
                            label: "Average sentiment score",
                            type: "line",
                            data: [0.1,0.25,-0.54,-0.56,0.53],
                            backgroundColor: '#676C6D',
                            borderColor: '#676C6D',
                            borderWidth: 3
                        },
                        {
                            label: "Positive line",
                            type: "line",
                            data: [0.25,0.25,0.25,0.25,0.25],
                            backgroundColor: '#00D2FC',
                            borderColor: '#00D2FC',
                            borderWidth: 2
                        },
                        {
                            label: "Negative line",
                            type: "line",
                            data: [-0.25,-0.25,-0.25,-0.25,-0.25],
                            backgroundColor: '#FC0000',
                            borderColor:'#FC0000',
                            borderWidth: 2
                        }
                        ]
                    },
            },
            mockDataNexter:{
                type: "line",
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
                        datasets: [
                        {
                            label: "Average emotion score",
                            type: "line",
                            data: [0.1,-0.45,0.3,0.56,0.23],
                            backgroundColor: '#676C6D',
                            borderColor: '#676C6D',
                            borderWidth: 3
                        },
                        {
                            label: "Positive line",
                            type: "line",
                            data: [0.25,0.25,0.25,0.25,0.25],
                            backgroundColor: '#00D2FC',
                            borderColor: '#00D2FC',
                            borderWidth: 2
                        },
                        {
                            label: "Negative line",
                            type: "line",
                            data: [-0.25,-0.25,-0.25,-0.25,-0.25],
                            backgroundColor: '#FC0000',
                            borderColor:'#FC0000',
                            borderWidth: 2
                        }
                    ]
                }
            }
        }
    },
    watch:{
        '$store.state.buinessUnit'(val){
            this.storeChartFunc.destroy(); 
            this.fetchSentiment();
            }   
        },
    methods:{
        fetchSentiment(){
            if(this.$store.state.buinessUnit === 'SCG'){
                const ctx =document.getElementById("scale-sentiment");
                const settingchart = new Chart(ctx, this.mockDataSCG);
                this.storeChartFunc = settingchart
            }else{
                const ctx =document.getElementById("scale-sentiment");
                const settingchart = new Chart(ctx, this.mockDataNexter);
                this.storeChartFunc = settingchart
            }
        }
    },
    mounted(){
        this.fetchSentiment();
    }
}
</script>

<style scoped>

</style>