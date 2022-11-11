<template>
    <button class="border border-blue-100 w-14 h-14 rounded-md">
        <div class="border-2 border-blue-100 w-11 m-auto -translate-y-1 mt-1" v-for="(index) in navMax" :key="index"></div>
    </button>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            navMax:4
        }
    },
    methods:{

    }
}
</script>

<style scoped>
/* .nv-menu-container{

    border: 1px solid white;
    width: 100px;
    height: 100px;
}
.nv-menu{

} */
</style>