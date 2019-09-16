<template>
    <div>
        <!-- <router-link v-for="(item,index) in homeRouterData" :key="index" :to="item.routerData">
            <img :src="item.src">
            <p v-html="item.title"></p>
        </router-link> -->
        <router-link v-for="(item,index) in dataList" :key="index" :to="''">
            <home-cell></home-cell>
        </router-link>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList:[1,2,3,4,5]
        }
    },
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
</style>