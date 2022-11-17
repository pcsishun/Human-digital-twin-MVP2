<template>
    <div class="navbar-container">
        <div class="hambuger-container">
            <button @click="haddleMenu">
                <div class="ml-5 mt-7">
                    <div class="text-center">
                        <div :class="cssHamMenuLR" ></div>
                        <div :class="cssHamMenuC" ></div>
                        <div :class="cssHamMenuLR" ></div>
                    </div>
                </div>
            </button>
        </div>
        <div class="logo-container">
            <div class="set-logo float-right flex">
                <div class="mr-10 mt-7">
                    <div v-if="$store.state.alertNotic === false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>
                    <div v-if="$store.state.alertNotic === true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                    </div>
                </div>
                <div class="mr-5">
                    <img src="../../assets/logo.png" height="80" width="80"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            hamburgerBar: 3,
            cssHamMenuLR: "set-bar-open-lr",
            cssHamMenuC: "set-bar-open-c"
        }
    },
    methods:{
        haddleMenu(){
            if(this.cssHamMenuLR === 'set-bar-open-lr'){
                this.cssHamMenuLR = 'set-bar-close-lr'
                this.cssHamMenuC = 'set-bar-close-c'
                this.$store.state.cssMenuOpen = 'set-menu-close'
            }else{
                this.cssHamMenuLR = 'set-bar-open-lr'
                this.cssHamMenuC = 'set-bar-open-c'
                this.$store.state.cssMenuOpen = 'set-menu-open'
            }
        }
    }
}
</script>

<style scoped>
.navbar-container{
    display: grid;
    height: 100px;
    background: rgb(224, 224, 224);
    grid-template-columns:  1fr 1fr;
}

.set-bar-open-lr{
    width: 60px;
    margin-top: 10px;
    border: 4px solid black;
    border-radius: 30px;
    transition: 0.5s
}
.set-bar-open-c{
    width: 45px;
    margin-top: 10px;
    border: 4px solid black;
    border-radius: 30px;
    transition: 0.5s
}

.set-bar-close-lr{
    width: 45px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 4px solid black;
    border-radius: 30px;
    transition: 0.5s
}

.set-bar-close-c{
    width: 65px;
    margin-top: 10px;
    border: 4px solid black;
    border-radius: 30px;
    transition: 0.5s
}

</style>