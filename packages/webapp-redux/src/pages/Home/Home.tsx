import React from 'react'

import logo from './assets/logo.svg'
import { Counter } from '../../containers'
import { HomeHeader, HomeLink, HomeLogo, HomeWrapper } from './Home.style'
// import { Display } from '@myscope/common'

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
