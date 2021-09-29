import React from 'react'
// import { Display } from '@myscope/common'

import { Counter } from '@containers'
import logo from './assets/logo.svg'
import { HomeHeader, HomeLink, HomeLogo, HomeWrapper } from './Home.style'

export const Home: React.FC = () => (
  <HomeWrapper>
    <HomeHeader>
      <HomeLogo src={logo} alt="logo" />
      <HomeLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </HomeLink>
      <Counter />
    </HomeHeader>
  </HomeWrapper>
)
