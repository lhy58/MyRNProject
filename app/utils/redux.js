/**
 * 适当封装 Redux，简化调用
 */
/* eslint-disable import/prefer-default-export */
import request from './request'

export function createAction (options) {
  const { url, payload, method, cb, type } = options
  return (dispatch) => {
    return request(url, payload, method).then((res) => {
      console.log('res', res)
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    })
  }
}