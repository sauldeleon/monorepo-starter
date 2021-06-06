import React from 'react'
import { StyledColumn, StyledColumnProps } from './Column.styles'

export type ColumnProps = StyledColumnProps

export const Column: React.FC<ColumnProps> = ({ children, ...props }) => (
  <StyledColumn data-testid="testColumn" {...props}>
    {children}
  </StyledColumn>
)
