import axios from 'axios'
import { MiddlewareAPI, Middleware, Dispatch, AnyAction } from 'redux'

import { apiStart, apiEnd, apiError, accessDenied, API_ACTION } from '../actions/api'

export const axiosMiddleware: Middleware<Dispatch> =
  ({ dispatch }: MiddlewareAPI) =>
  next =>
  (action: AnyAction) => {
    next(action)

    if (action.type !== API_ACTION) return

    const { url, method, data, accessToken, onSuccess, onFailure, label, headers } = action.payload
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

    // axios default configs
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || ''
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

    if (label) {
      dispatch(apiStart(label))
    }

    axios
      .request({
        url,
        method,
        headers,
        [dataOrParams]: data,
      })
      .then(({ data }) => {
        dispatch(onSuccess(data))
      })
      .catch(error => {
        dispatch(apiError(error))
        dispatch(onFailure(error))

        if (error.response && error.response.status === 403) {
          dispatch(accessDenied(window.location.pathname))
        }
      })
      .finally(() => {
        if (label) {
          dispatch(apiEnd(label))
        }
      })
  }
