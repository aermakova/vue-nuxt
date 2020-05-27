export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  }
};

export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    commit('setUsers', users);
  }
};

export const getters = {
  users: state => state.users
};

