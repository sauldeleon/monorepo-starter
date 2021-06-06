import styled from '@emotion/styled'
import { Flex, FlexProps } from '../Flex/Flex'

export type StyledRowProps = Omit<FlexProps, 'flex-direction'>

export const StyledRow = styled(Flex)<StyledRowProps>`
  flex-direction: row;
`
