function oneAsync (context, payload) {
    console.log('actions=>', context, payload);
    let { commit } = context;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('oneAsync', payload);
            resolve();
        }, 1000);
    })
}
export default {
    oneAsync
}