<template>
    <div class="word-cloud-container">
        <div class="set-chart grid grid-cols-2" >
            <div >
                <img class="text-center m-auto" src="../../../assets/wordcloud.png" width="400" height="400" v-if="$store.state.buinessUnit === 'SCG'"/>
                <img class="text-center m-auto w-[500px] h-[400px]" src="../../../assets/wordcloud2.png" width="500" height="400" v-if="$store.state.buinessUnit === 'Nexter'" />
            </div>
            <div class="ml-[30%] mt-[10%]">
                <div v-if="$store.state.buinessUnit === 'SCG'">
                    <div class="text-[18px] font-bold mb-5">Top 5</div>
                    <div class="text-[18px] font-medium">
                        <div class="text-cyan-700">1. Budget</div>
                        <div class="text-green-700">2. Colleague</div>
                        <div class="text-amber-700">3. Internet Speed</div>
                        <div class="text-orange-700">4. OKRs</div>
                        <div class="text-red-700">5. Meeting</div>
                    </div>
                </div>
                <div v-if="$store.state.buinessUnit === 'Nexter'">
                    <div class="text-[18px] font-bold mb-5">Top 5</div>
                    <div class="text-[18px] font-medium">
                        <div class="text-cyan-700">1. Marketing</div>
                        <div class="text-green-700">2. Teamwork</div>
                        <div class="text-amber-700">3. Aspirations</div>
                        <div class="text-orange-700">4. Career</div>
                        <div class="text-red-700">5. Brainstorming</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>