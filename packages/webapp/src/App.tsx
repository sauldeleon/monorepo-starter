import React from 'react'
import logo from './logo.svg'
import { AppHeader, AppLink, AppLogo, AppWrapper } from './App.style'
import { Button } from '@myscope/common'

export const App: React.FC = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </AppLink>
      <Button style={{ marginTop: 20 }} title="Welcome" />
    </AppHeader>
  </AppWrapper>
)
