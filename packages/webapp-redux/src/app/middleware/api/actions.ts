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

export const apiStart = createAction<string>('api/start')
export const apiEnd = createAction<string>('api/end')
export const accessDenied = createAction('api/accessDenied', (url: string) => ({ payload: { url } }))
export const apiError = createAction<string>('api/error')

export const API_ACTION = 'api/action'
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
