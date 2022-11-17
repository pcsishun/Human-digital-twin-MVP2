<template>
    <div :class="$store.state.cssMenuOpen">
        <div class="bu-selection text-center"  v-if="$store.state.cssMenuOpen === 'set-menu-open'">
            <div > 
                <img v-if="selectionBusiness === 'SCG'" class="text-center m-auto rounded-md" src="../../assets/SCG.jpg" width="150" height="150"/>
                <img v-if="selectionBusiness === 'Nexter'" class="text-center m-auto rounded-md" src="../../assets/nexter.png" width="150" height="150"/>
            </div>

            <button @click="haddleBtnBu" class="btn-bu mt-10 border-2 text-white font-bold text-lg border-emerald-400 rounded-2xl bg-emerald-400">
                <div class="flex justify-center">

                    <div class="mr-2 mt-1">
                        Business Unit
                    </div>
                    <svg v-if="cssBtnBu === 'close-bu-dropdown'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <svg v-if="cssBtnBu === 'open-bu-dropdown'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </button>   

            <div :class="cssBtnBu" >
                <div v-if="cssBtnBu === 'open-bu-dropdown'">
                    <div class="translate-y-6">
                        <img v-if="buSelection === 'SCG'" class="text-center m-auto rounded-md" src="../../assets/SCG.jpg" width="80" height="80"/>
                        <img v-if="buSelection === 'Nexter'" class="text-center m-auto rounded-md" src="../../assets/nexter.png" width="80" height="80"/>
                    </div>
                    <div>
                        <input list="business_bu" type="text" class='mt-16 rounded-lg' v-model="buSelection"/>
                        <datalist id="business_bu">
                            <option value="SCG">SCG</option>
                            <option value="Nexter">Nexter</option>
                        </datalist>
                    </div>
                    <div>
                        <button @click="haddleSelelectBu" class="btn-bu-sel mt-6 text-slate-700 font-bold text-lg">Submit</button>
                    </div>
                </div>
            </div>

            <div class="set-bottom-menu-container mt-10">
                <div class="set-menu-bottom text-cyan-700 w-4/5 m-auto text-left border-8 border-neutral-200 rounded-lg bg-cyan-100">
                    
                    <div class="ml-3">
                        <button class="w-10/12">
                            <div class="btn-1 text-left">Home</div>
                        </button>
                    </div>
                    <div class="ml-3 mt-10">
                        <button class="w-10/12">
                            <div class="btn-1 text-left">Filter</div>
                        </button>
                    </div>
                    <div class="ml-3 mt-10">
                        <button class="w-10/12">
                            <div class="btn-1 text-left">Download</div>
                        </button>
                    </div>
                    <div class="ml-3 mt-10">
                        <button class="w-10/12">
                            <div class="btn-1 text-left">Setting</div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cssBtnBu: "open-bu-dropdown", // close-bu-dropdown
            buSelection: "SCG",
            selectionBusiness: ""
        }
    },
    beforeMount(){
        this.selectionBusiness = this.buSelection
    },
    methods:{
        haddleBtnBu(){
            if(this.cssBtnBu === 'open-bu-dropdown'){
                this.cssBtnBu = 'close-bu-dropdown'
            }else{
                this.cssBtnBu = 'open-bu-dropdown'
            }
        },

        haddleSelelectBu(){
            this.selectionBusiness = this.buSelection
        }
    },
    mounted(){
        
    },
    updated(){
        // console.log(this.buSelection)
    }
}
</script>

<style scoped>
    input{
        text-indent: 5%;
    }
    .set-menu-open{
        width: 250px;
        height: 100vh;
        background-color: rgb(224, 254, 254);
        transition: 1s;
    }

    .set-menu-close{
        width: 0px;
        height: 100vh;
        background-color: rgb(216, 255, 255);
        transition: 1s;
    }

    .btn-bu{
        width: 200px;
        height: 80px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    .btn-bu:hover{
        background-color: rgb(67, 200, 146);
    }

    .btn-bu:active{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }

    .open-bu-dropdown{
        margin: auto;
        padding-bottom: 30px;
        width: 200px;
        background-color: rgb(152, 239, 204);
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        transition: 0.5s;
    }

    .close-bu-dropdown{
        margin: auto;
        height: 0px;
        width: 200px;
        background-color: rgb(152, 239, 204);
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        transition: 0.5s;
    }
    .btn-bu-sel{
        background: rgb(104, 218, 172);
        border-radius: 10px;
        width: 150px;
        height: 50px;
    }
    .set-bottom-menu-container{
        font-weight: bold;
    }

    .set-menu-bottom{
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 20px;
    }
    .btn-1:hover{
        background: cadetblue;
        border-radius: 10px;
        color: white;
    }

    .btn-1:active{
        background: rgb(73, 122, 123);
        border-radius: 10px;
        color: white;
    }
</style>