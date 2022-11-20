<template>
    <div class="comment-set">
        <textarea class="border border-gray-600 rounded-lg w-[100%] h-[200px]" v-model="commentText"></textarea>
        <div class="comment-histroy m-[10px] max-h-[300px] overflow-y-scroll" >
            <table class="w-[100%]" >
                <tr class="text-center">
                    <th >Date</th>
                    <th>Comment</th>
                    <th></th>
                </tr>
                <tr class="mt-3" v-for="(data, index) in $store.state.listComment" :key="index">
                    <td class="text-center">{{data.dateTime}}</td>
                    <td class="text-center">{{data.shortText}}</td>
                    <td class="text-center grid grid-cols-3">
                        <button class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                        <button class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                        </button>
                        <button class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-blue-600">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="text-right mt-10">
            <button class="bg-cyan-500 w-[150px] h-[40px] text-[18px] text-white rounded-lg hover:bg-cyan-600 active:bg-cyan-700" @click="haddleSaveComment">Save</button>
            <button class="bg-red-500 w-[150px] h-[40px] text-[18px] text-white rounded-lg ml-5 hover:bg-red-600 active:bg-red-700" @click="haddleClearComment" >Clear</button>
        </div>
    </div>
</template>

<script>

export default {
    components:{

    },
    data(){
        return{
            commentText:"",
        }
    },
    watch(){
        
    },
    methods:{
        haddleSaveComment(){
            if(this.commentText !== ""){
                const today = new Date();
                const yyyy = today.getFullYear();
                const mm = today.getMonth() +1;
                const dd = today.getDay();
                const setText = {
                    dateTime: `${dd}/${mm}/${yyyy}`,
                    shortText: this.commentText.substr(1,30) + "...",
                    text: this.commentText
                }
                this.$store.state.listComment.push(setText);
                console.log("comment: ",this.$store.state.listComment);
                this.commentText = ""
            }else{
                alert("Cannot save empty comment.")
            }
            
        },
        haddleClearComment(){
            this.commentText = "";
        },
        haddleWatchComment(){
            
        },
        haddleUpdateComment(){

        },
        haddleDeleteComment(){

        }
    },
    mounted(){

    }
}
</script>

<style scoped>

</style>