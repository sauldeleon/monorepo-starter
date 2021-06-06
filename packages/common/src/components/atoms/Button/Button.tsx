import React from 'react'
import { StyledButton } from './Button.styles'

export type CustomButtonProps = {
  text?: string
} & ButtonProps

export const Button: React.FC<CustomButtonProps> = ({ text, children, ...props }) => (
  <StyledButton data-testid="testButton" {...props}>
    {text || children}
  </StyledButton>
)
