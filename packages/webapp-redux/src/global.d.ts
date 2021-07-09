/// <reference types="@myscope/common" />

declare global {
  type ApiCallStatus = 'IDLE' | 'LOADING' | 'FAILED'
  type HTTPMethod = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'

  interface User {
    id: string
    createdAt: Date
    name: string
    email: string
    avatar: string
  }
}

export {}
