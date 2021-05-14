import React from 'react'
import { StyledButton } from './Button.styles'

export type ButtonProps = {
  title: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FunctionComponent<ButtonProps> = ({ title, ...props }) => (
  <StyledButton {...props}>{title}</StyledButton>
)
