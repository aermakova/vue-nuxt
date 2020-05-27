export const state = () => ({
  token: []
});

export const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  clearToken(state) {
    state.token = null;
  },
};

export const actions = {
  nuxtServerInit() {
    console.log('nuxtServerInit')
  },
  login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  },
};

export const getters = {
  hasToken: state => !!state.token
};

