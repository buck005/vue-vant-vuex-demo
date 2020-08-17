<template>
    <div class="home">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <h3>依赖当前数据：{{countPlusLocalState}}</h3>
        <h3>当前数字：{{$store.state.count}}</h3>
        <van-button @click="addOne">点我</van-button>
        <h3>mapGetters：{{this.doneTodos($store.state,localGetters)[0].text}}</h3>
        <van-button @click="increment(10)">mapMutations</van-button>
        <van-button @click="add(10)">mapMutations</van-button>
        <h3>mapMutations:{{$store.state.num}}</h3>
    </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem, Button } from "vant";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

export default {
    name: "Home",
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Button.name]: Button
    },
    data() {
        return {
            localCount: 10,
            images: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg"
            ],
            localGetters: 1
        };
    },
    mounted() {
        console.log(this.doneTodos);
    },
    computed: {
        // 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余,为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性
        ...mapState({
            // 箭头函数可使代码更简练
            count: state => state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`
            countAlias: "count",

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState(state) {
                return state.count + this.localCount;
            }
        }),
        // maoGetters：辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters(["doneTodos"])
    },
    methods: {
        // vuex 辅助函数，组件中分发 action
        //你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
        ...mapActions(["oneAsync"]), // 将 `this.oneAsync(amount)` 映射为 `this.$store.dispatch('oneAsync', amount)`
        addOne() {
            this.oneAsync(1);
            if (this.localGetters === 1) {
                this.localGetters = 2;
            } else {
                this.localGetters = 1;
            }
        },
        // 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
        ...mapMutations(["increment"]), // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        ...mapMutations({
            add: "increment" // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        })
    }
};
</script>
<style scoped>
img {
    width: 100%;
}
</style>
