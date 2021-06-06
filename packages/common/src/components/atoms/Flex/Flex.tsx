import React from 'react'
import { StyledFlex, StyledFlexProps } from './Flex.styles'

export type FlexProps = Omit<StyledFlexProps, 'display'>

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => (
  <StyledFlex data-testid="testFlex" {...props}>
    {children}
  </StyledFlex>
)
