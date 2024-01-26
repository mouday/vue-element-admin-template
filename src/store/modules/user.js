// import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth-util'
import { resetRouter } from '@/router'
import Http from '../../api/http.js'

export default {
  namespaced: true,

  state: {
    token: getToken(),
    name: '',
    avatar: 'user-avatar.gif',
    userInfo: null,
  },

  getters: {
    hasPermission: (state) => true,
    hasUserInfo: (state) => state.userInfo && state.userInfo.username,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
  },

  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // get user info
    // getInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token)
    //       .then((response) => {
    //         const { data } = response

    //         if (!data) {
    //           reject('Verification failed, please Login again.')
    //         }

    //         const { name, avatar } = data

    //         commit('SET_NAME', name)
    //         commit('SET_AVATAR', avatar)
    //         resolve(data)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },

    // user logout
    logout({ commit, state }) {
      commit('SET_USER_INFO', null)
      removeToken()
      resetRouter()
    },

    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    async getUserInfo({ commit }) {
      const res = await Http.getUserInfo()

      if (res.ok) {
        commit('SET_USER_INFO', res.data)
      }
    },
  },
}
