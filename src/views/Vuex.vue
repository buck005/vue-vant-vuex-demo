<template>
    <div class="home">
        <van-swipe>
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <van-button @click="$store.dispatch('user/incrementIfOddOnRootSum')">dispatch</van-button> <span>当前数据：{{$store.state.user.count}}</span><br/>
        <van-button @click="addNum()">click</van-button> <span>当前数据：{{$store.state.user.count}}</span><br/>
        <van-button @click="() => {this['user/incrementIfOddOnRootSum']()}">mapActions</van-button> <span>当前数据：{{$store.state.user.count}}</span>
    </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem, Button } from "vant";
import { mapActions, mapState, mapGetters, mapMutations,createNamespacedHelpers } from "vuex";


export default {
    name: "Home",
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Button.name]: Button
    },
    data() {
        return {
            images: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg"
            ]
        };
    },
    mounted() {
        console.log(this);
    },
    computed: {},
    methods: {
        ...mapActions(['user/incrementIfOddOnRootSum']),
        addNum() {
            this['user/incrementIfOddOnRootSum']();
        }
    }
};
</script>
<style scoped>
img {
    width: 100%;
}
</style>
