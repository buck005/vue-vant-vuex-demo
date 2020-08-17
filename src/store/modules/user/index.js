const moduleA = {
    state: () => ({
        count: 0
    }),
    mutations: {
        increment (state, payload) {
            console.log('state=>', state, 'payload=>', payload)
            // 这里的 `state` 对象是模块的局部状态
            if(payload){
                state.count = state.count + payload
            }else{
                state.count++
            }
        }
    },

    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    },
    actions: {
        incrementIfOddOnRootSum (context) {
            // state：当前模块数据状态  rootState：全局的数据状态
            let { state, commit, rootState } = context;
            // console.log('context=>',context)
            // console.log('state=>', state, 'commit=>', commit, 'rootState=>', rootState)
            if ((state.count + rootState.count) % 2 === 1) {
                // 真实项目中，一般先发送请求，拿到数据后在 commit
                commit('increment',2)
            }
        }
    },
}
export default {
    namespaced: true,
    ...moduleA
};