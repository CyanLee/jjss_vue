<template>
    <div id="main-div">
        <navi naviTitle="银行卡"></navi>
        <div class="img-div">
            <img src="../../img/mine-bandCard-null.png" alt="">
        </div>
        <p>您还没有添加银行卡，快去添加吧</p>
        <router-link to="mineAddBankCard">添加银行卡</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    #main-div{
        padding: 1.28rem 0 1.28rem 0;
        .img-div{
            margin-top: 2.8rem;
            height: 2.84rem;
            img{
                width: 3rem;
                height: 2.84rem;
            }
        }
        p{
            font-size: 0.3rem;
            color: #32404E;
        }
        a{
            display: inline-block;
            width: 6.3rem;
            height: 1rem;
            margin-top: 0.8rem;
            font-size: 0.4rem;
            color: white;
            background: #19CD60;
            border-radius: 0.1rem;
            line-height: 1rem;
        }
    }
</style>