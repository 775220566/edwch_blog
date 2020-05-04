// https://vuex.vuejs.org/en/actions.html
import { login, getUserInfo } from '@/api/user'
import { removeToken, setToken } from '@/utils/auth'

export default {
  // 登录
  loginByUserName ({ commit }, userInfo) {
    // userInfo.username = userInfo.username.trim()
    console.log('调用登录接口')
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          console.log(response)
          const code = response.code
          const data = response.data
          if (code === 200) {
            console.log('登录成功')
            commit('setToken', data.token)
            setToken(data.token)
            resolve()
          } else {
            reject(response)
          }
        })
        .catch(error => {
          console.log('登录失败')
          reject(error)
        })
    })
  },
  // 获取用户信息
  fetchUserInfo ({ commit }, state) {
    return new Promise((resolve, reject) => {
      console.log('调用用户信息接口')
      getUserInfo()
        .then(response => {
          const code = response.code
          const data = response.data
          if (code === 200) {
            console.log(data)
            commit('setUserInfo', data)
            resolve()
          } else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 登出
  logout ({ commit }) {
    console.log('登出')
    return new Promise((resolve, reject) => {
      commit('setUserInfo', '')
      commit('setToken', '')
      removeToken()
    })
  }
}
