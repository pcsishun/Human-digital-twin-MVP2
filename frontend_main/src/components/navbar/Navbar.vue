<template>
 
    <div class="navbar-container">
        <div :class="cssNavOpen">
            <div class="text-right" @click="haddleCloseMenu">
                <button v-if="cssNavOpen==='navOpen'" class="border border-white w-10 h-10 rounded-full text-white mr-3 mt-4 ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <button v-if="cssNavOpen==='navClose'" class="border border-white w-10 h-10 rounded-full text-white ml-3 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
            <div class="mt-6">
                <div :class="cssTextMenu">
                    <div class="on-set-menu" v-if="debugIslogin === true">
                        <div class="menu-list mt-5 text-white flex">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <div class="ml-3">
                                <button>หน้าโฮม</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>

                            <div class="ml-3">
                                <button>รายการของฉัน</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                            <div class="ml-3">
                                <button>แดชบอร์ด</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                            <div class="ml-3">
                                <button>กิจกรรม</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                            <div class="ml-3">
                                <button>บันทึกของฉัน</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                            <div class="ml-3">
                                <button>ปรึกษาผู้เชียวชาญ</button>
                            </div>
                        </div>
                        <div class="menu-list mt-5 text-white flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <div class="ml-3">
                                <button>พบเพือนใหม่</button>
                            </div>
                        </div>
                    </div>
                    <div class="menu-box-login set-text">
                        <div class="mt-5 text-center">
                            <div>
                                <button class="border border-white rounded-md w-24">เข้าสู่ระบบ</button>
                            </div>
                            <div>
                                <button class="mt-3">สมัครสมาชิก</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import BurgerMenu from './burgermenu/BurgerMenu.vue';

export default {
    components:{
        BurgerMenu
    },
    data(){
        return{
            cssNavOpen: "navClose",
            cssTextMenu: "menuClose",
            debugIslogin: true
        }
    },
    methods:{
        haddleCloseMenu(){
            if(this.cssNavOpen === "navOpen"){
                this.cssNavOpen = "navClose"
                this.cssTextMenu = "menuClose"
            }else{
                this.cssNavOpen = "navOpen"
                this.cssTextMenu = "menuOpen"
            }
        }
    }
}
</script>

<style scoped>

@media (max-width:480px){
    .navbar-container{
        background-color: rgba(50, 50, 50,0.7);
        height: 80px;
        z-index: 99px;
    }

    .navOpen{
        background: rgba(92, 92, 92,0.9);
        height: 150vh;
        width: 200px;
        z-index: 99px;
        transition: 1s;
    }

    .navClose{
        background: rgba(92, 92, 92,0.9);
        height: 150vh;
        width: 0px;
        z-index: 99px;
        transition: 1s
    }

    .menuOpen{
        margin: auto;
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s linear;
    }

    .menuClose{
        margin: auto;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 1s, opacity 0.5s linear;
    }

    .set-text{
        margin-top: 2rem;
        width: 160px;
        border: 1px solid white;
        height: 100px;
        border-radius: 10px;
    }
    .menu-list{
        margin-top: 40px;
    }
    .on-set-menu{
        margin-left: 1rem;
    }
    .menu-box-login{
        margin: auto;
        color: white;
        margin-top: 3rem;
        width: 150px;
    }
    
}


@media (min-width: 481px) {
    .navbar-container{
        background-color: rgba(50, 50, 50,0.7);
        height: 80px;
        z-index: 99px;
    }

    .navOpen{
        background: rgba(92, 92, 92,0.9);
        height: 100vh;
        width: 300px;
        z-index: 99px;
        transition: 1s;
    }

    .navClose{
        
        background: rgba(92, 92, 92,0.9);
        height: 100vh;
        width: 0px;
        z-index: 99px;
        transition: 1s
    }

    .menuOpen{
        margin:auto;
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s linear;
    }
    .menuClose{
        margin:auto;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 1s, opacity 0.5s linear;
    }

    .set-text{
        margin-top: 2rem;
        width: 160px;
        border: 1px solid white;
        height: 100px;
        border-radius: 10px;
    }
    .on-set-menu{
        margin-left: 3rem;
    }

    .menu-list{
        margin-top: 50px;
        font-weight: bold;
        font-size:large;
    }

    .menu-box-login{
        margin: auto;
        color: white;
        margin-top: 3rem;
        width: 250px;
    }
}

</style>