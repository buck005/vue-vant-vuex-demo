function oneAsync (state, payload) {
    console.log('mutations=>', state, payload);
    state.count = state.count + payload;
}
function increment (state,payload) {
    // 变更状态
    state.num += payload;
}
export default {
    oneAsync,
    increment
}