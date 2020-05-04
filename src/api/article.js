import request from '@/utils/request'

export function getArticleList (searchMap, page, size) {
  return request({
    url: '/article/search/' + page + '/' + size,
    method: 'get',
    params: searchMap
  })
}

export function addArticle (params) {
  return request({
    url: '/article',
    method: 'post',
    data: params
  })
}

export function getArticle (params) {
  return request({
    url: '/article/' + params,
    method: 'get'
  })
}
