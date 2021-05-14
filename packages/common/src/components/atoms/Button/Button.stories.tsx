import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

const runAlert = () => {
  alert('Hello!')
}

export const Regular = () => <Button title="Welcome" onClick={runAlert} />
