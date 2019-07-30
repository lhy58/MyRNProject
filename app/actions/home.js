import * as types from '../constants/actionType'
import {
  API_HOME
} from '../constants/api'
import { createAction } from '../utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */
export const dispatchHome = payload => createAction({
  url: API_HOME,
  type: types.HOME_INFO,
  payload
})

/*
*
*模拟action的使用
*/
export function dispatchHomeData (data) {
  return (dispatch, getState) =>{
    dispatch({
        type: types.HOME_INFO,
        payload: data
    })
  }
}