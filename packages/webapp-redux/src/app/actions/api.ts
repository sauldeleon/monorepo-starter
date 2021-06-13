import { ActionCreator, createAction } from '@reduxjs/toolkit'

interface ApiPayload {
  url?: string
  method?: HTTPMethod
  data?: Record<string, unknown>
  accessToken?: string
  onSuccess?: ActionCreator<unknown>
  onFailure?: ActionCreator<unknown>
  label?: string
  headersOverride?: Record<string, unknown>
}

export const API_ACTION = 'api/action'
export const API_START = 'api/start'
export const API_END = 'api/end'
export const API_DENIED = 'api/accessDenied'
export const API_ERROR = 'api/error'

export const apiStart = createAction<string>(API_START)
export const apiEnd = createAction<string>(API_END)
export const accessDenied = createAction(API_DENIED, (url: string) => ({ payload: { url } }))
export const apiError = createAction<string>(API_ERROR)
export const apiAction = createAction(
  API_ACTION,
  ({
    url = undefined,
    method = 'GET',
    data = {},
    accessToken = undefined,
    onSuccess = () => void null,
    onFailure = () => void null,
    label = undefined,
    headersOverride = {},
  }: ApiPayload) => ({
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  }),
)
