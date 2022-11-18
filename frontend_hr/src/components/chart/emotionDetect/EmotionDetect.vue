<template>
    <div>
        <canvas id="emotion-set" ></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import BarChartData from './BarChartData.js';

export default {
    name: 'emotion-setChart',
    data(){
        return{
        // barData:'',
        storeChartFunc:null,
        // selectionBU: this.$store.state.buinessUnit,
        // mockdata:{
        //     type: "bar",
        //     data: {
        //             labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
        //             datasets: []
        //     },
        // }, 
        // mockNexterDataNor: [0.88,0.76 ,0.75 ,0.60 ,0.89],
        // mockNexterDataAxi: [0.2,0.11 ,0.34 ,0.67 ,0.87],
        // mockNexterDataDepr: [0.12,0.1 ,0.03 ,0.15 ,0.2],
    
        // mockSCGDataNor: [0.94, 0.8, 0.87, 0.9, 0.73],
        // mockSCGDataAxi: [0.25, 0.14, 0.10, 0.3, 0.48],
        // mockSCGDataDepr: [0.11, 0.12, 0.05, 0.24, 0.1]
            
        datatestSCG: {
            type: "bar",
            data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
            datasets: [
                    {
                        label: "Percent Normal",
                        type: "bar",
                        data: [0.88,0.76 ,0.75 ,0.60 ,0.89],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                    },
                    {
                        label: "Percent Anxiety",
                        type: "bar",
                        data: [0.2,0.11 ,0.34 ,0.67 ,0.87],
                        backgroundColor:  'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    },
                    {
                        label: "Percent Depression",
                        type: "bar",
                        data: [0.12,0.1 ,0.03 ,0.15 ,0.2],
                        backgroundColor:  'rgba(255, 205, 86, 0.2)',
                        borderColor:'rgb(255, 205, 86)',
                        borderWidth: 1
                    }
                ]
            },
        },

        datatestNexter: {
            type: "bar",
            data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
            datasets: [
                    {
                        label: "Percent Normal",
                        type: "bar",
                        data: [0.94, 0.8, 0.87, 0.9, 0.73],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                    },
                    {
                        label: "Percent Anxiety",
                        type: "bar",
                        data: [0.25, 0.14, 0.10, 0.3, 0.48],
                        backgroundColor:  'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    },
                    {
                        label: "Percent Depression",
                        type: "bar",
                        data:  [0.11, 0.12, 0.05, 0.24, 0.1],
                        backgroundColor:  'rgba(255, 205, 86, 0.2)',
                        borderColor:'rgb(255, 205, 86)',
                        borderWidth: 1
                    }
                ]
            },
        }


 
        }
    },
    watch:{
        '$store.state.buinessUnit'(val){
            this.storeChartFunc.destroy(); 
            this.mockFuncCopo();
        }   
    },
    methods:{


        mockFuncCopo () {
            if(this.$store.state.buinessUnit === 'SCG'){
                const ctx =document.getElementById("emotion-set");
                const settingchart = new Chart(ctx, this.datatestSCG);
                this.storeChartFunc = settingchart
            }else{
                const ctx =document.getElementById("emotion-set");
                const settingchart = new Chart(ctx, this.datatestNexter);
                this.storeChartFunc = settingchart
            }
        },

        fetchCopo(setMain){
            console.log(setMain, "setMain")
            let collector = [];
            let setDatasets = [];
            let labelName = ['Normal', 'Anxiety', 'Depression']
            let setColorBg = ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)' ];
            let setColorBorder = ['rgb(54, 162, 235)','rgb(255, 99, 132)','rgb(255, 205, 86)'];

            if(this.$store.state.buinessUnit === 'SCG'){

                setDatasets.push(this.mockSCGDataNor)
                setDatasets.push(this.mockSCGDataAxi)
                setDatasets.push(this.mockSCGDataDepr)

                for(let i = 0; i < 1; i++){
                    console.log('SCG select');
                    const setData = {
                        label: labelName[i],
                        type: "bar",
                        data: [0.88,0.76 ,0.75 ,0.60 ,0.89],
                        backgroundColor: setColorBg[i],
                        borderColor: setColorBorder[i],
                        borderWidth: 1
                    }
                    collector.push(setData);
                }
                setMain.data.datasets.push(collector);
                console.log("setMain ==> ",setMain)
                const ctx =document.getElementById("emotion-set");
                const settingchart = new Chart(ctx,setMain);
                this.storeChartFunc = settingchart
            }else{
                console.log('Nexter select');
                setDatasets.push(this.mockNexterDataNor)
                setDatasets.push(this.mockNexterDataAxi)
                setDatasets.push(this.mockNexterDataDepr)

                for(let i = 0; i < setDatasets.length; i++){
                    const setData = {
                        label: labelName[i],
                        type: "bar",
                        data: setDatasets[i],
                        backgroundColor: setColorBg[i],
                        borderColor: setColorBorder[i],
                        borderWidth: 1
                    }
                    collector.push(setData);
                }
                setMain.data.datasets.push(collector);
                const ctx =document.getElementById("emotion-set");
                const settingchart = new Chart(ctx,setMain);
                this.storeChartFunc = settingchart
            }
        }
    },
    beforeMount(){

    },      
    mounted(){
        // this.fetchCopo(this.mockdata)
        this.mockFuncCopo();

        // const ctx =document.getElementById("emotion-set");
        // new Chart(ctx, this.datatest);
    },
    updated(){
        // console.log("selectionBU --",this.selectionBU)
    }
}
</script>

<style scoped>

</style>