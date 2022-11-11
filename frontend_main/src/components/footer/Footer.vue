<template>
    <div class="footer-container text-white">
        <div class="set-box">
            <div class="box-text">
                <p>Created by Human digital twin</p>
                <p>Power by MIT Face API</p>
            </div>
            <div class="contact-text mt-4">
                <div >
                    <p>Contact us</p>
                </div>
                <div >
                    <img src="../../assets/phone.png" width="60" height="60"/>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


@media (max-width:480px){
    .footer-container{
        height: 200px;
        width: 100%;
        position: absolute;
        background: rgb(97, 97, 97);
        bottom: 0;
        transform: translateY(500px);
    }
    .set-box{
        transform: translateY(50px);
        margin-top: 15px;
        margin-left: 25px;
        margin-right: 25px;
    }
}

@media (min-width: 481px){
    .footer-container{
        height: 200px;
        width: 100%;
        position: absolute;
        background: rgb(97, 97, 97);
        bottom: 0;
        transform: translateY(200px);
        text-align: right;
    }
    .set-box{
        text-align: right;
    }
    .contact-text{
        border: 1px solid red;
        text-align: right;
    }
}


</style>