import React from 'react'
import logo from './logo.svg'
import { AppHeader, AppLink, AppLogo, AppWrapper } from './App.style'
import { Counter } from './containers'

export const App: React.FC = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppLink>
      <Counter />
    </AppHeader>
  </AppWrapper>
)
