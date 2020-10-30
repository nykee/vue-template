import Vue from 'vue';

const _Vue = new Vue();

const actions = {
    user_login: ({commit}, user) => commit('user_login', user),



};
export default actions;