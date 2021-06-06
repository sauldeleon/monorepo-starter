import React from 'react'
import { StyledRow, StyledRowProps } from './Row.styles'

export type RowProps = StyledRowProps

export const Row: React.FC<RowProps> = ({ children, ...props }) => (
  <StyledRow data-testid="testRow" {...props}>
    {children}
  </StyledRow>
)
