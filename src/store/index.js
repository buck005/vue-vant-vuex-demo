import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import home from 'store/modules/home';
import user from 'store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    num: 1,
    todos: [
      { id: 1, text: 'king', done: true },
      { id: 2, text: 'jack', done: false }
    ]
  },
  getters: {
    doneTodos: (state, getters) => {
      return (state, getters) => {
        return state.todos.filter(todo => todo.id === getters)
      }
    }
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  modules: {
    home: home,
    user: user
  }
});
