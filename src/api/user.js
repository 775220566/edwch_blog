import request from '@/utils/request'

export function login (params) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

export function getUserInfo () {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

export function getUserInfoById (id) {
  return request({
    url: '/user/userInfo/' + id,
    method: 'get'
  })
}
