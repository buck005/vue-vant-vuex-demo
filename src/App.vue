<template>
    <div id="app">
        <router-view /> 
        <van-tabbar route v-model="active">
            <van-tabbar-item replace to="/" icon="home-o">
              vuex
            </van-tabbar-item>
            <van-tabbar-item replace to="/about" icon="orders-o">
              介绍
            </van-tabbar-item>
            <van-tabbar-item replace to="/vuex" icon="setting-o">
              vuex-modules
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0
        };
    }
};
</script>

<style lang="less">
</style>
