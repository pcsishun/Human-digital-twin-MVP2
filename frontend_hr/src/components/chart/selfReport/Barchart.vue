<template>
    <div>
        <canvas id="selfreport" ></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import BarChartData from './BarChartData.js';

export default {
    name: 'selfReportChart',
    data(){
        return{
        barData:'',
        storeChartFunc:null,
        selectionBU: this.$store.state.buinessUnit,
        mockdata:{
            type: "bar",
            data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
                    datasets: []
            },
        }, 
        setupBarChart: {
            label: "Emotion Score",
            type: "bar",
            // data: [0.51, 0.32, 0.64, 0.93, 0.76],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
            ],
            borderWidth: 1
        },

        setupLineChart:{
            label: "Average emotion score",
            type: "line",
            // data: [0.44,0.45,0.54,0.56,0.53],
            backgroundColor: "#ED7E7E",
            borderColor: "#D13B3B",
            borderWidth: 2
        },

        mockNexterData: [0.44, 0.45 ,0.54 ,0.56 ,0.53],
        mockMeanNexterData: [0.55, 0.56, 0.54, 0.45, 0.55],
        mockSCGData: [0.65, 0.55, 0.45, 0.66, 0.78],
        mockMeanSCGData: [0.43, 0.54, 0.55, 0.54, 0.51]
        }
    },
    watch:{
        '$store.state.buinessUnit'(val){
            this.storeChartFunc.destroy(); 
            this.fetchCopo(this.mockdata, 
            this.setupBarChart, 
            this.setupLineChart, 
            this.mockNexterData,
            this.mockMeanNexterData,
            this.mockSCGData,
            this.mockMeanSCGData)
        }   
    },
    methods:{

        fetchCopo(setMain, setBar, setLine, mockNexterData, mockMeanNexterData, mockSCGData, mockMeanSCGData ){
            console.log(setMain, "setMain")
            if(this.$store.state.buinessUnit === 'SCG'){
                console.log('SCG select');
                setBar['data'] = mockSCGData
                setLine['data'] = mockMeanSCGData
                setMain.data.datasets.push(setBar)
                setMain.data.datasets.push(setLine)
                const ctx =document.getElementById("selfreport");
                const settingchart = new Chart(ctx,setMain);
                this.storeChartFunc = settingchart
                // settingchart.destroy();
            }else{
                console.log('Nexter select');
                setBar['data'] = mockNexterData
                setLine['data'] = mockMeanNexterData
                setMain.data.datasets.push(setBar)
                setMain.data.datasets.push(setLine)
                const ctx =document.getElementById("selfreport");
                const settingchart = new Chart(ctx,setMain);
                this.storeChartFunc = settingchart
                // settingchart.destroy();
            }
        }
    },
    beforeMount(){

    },      
    mounted(){
        this.fetchCopo(this.mockdata, 
        this.setupBarChart, 
        this.setupLineChart, 
        this.mockNexterData,
        this.mockMeanNexterData,
        this.mockSCGData,
        this.mockMeanSCGData)
        // const ctx =document.getElementById("selfreport");
        //         new Chart(ctx, this.barData);
    },
    updated(){
        // console.log("selectionBU --",this.selectionBU)
    }
}
</script>

<style scoped>

</style>