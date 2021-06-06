import styled from '@emotion/styled'
import { Flex, FlexProps } from '../Flex/Flex'

export type StyledColumnProps = Omit<FlexProps, 'flex-direction'>

export const StyledColumn = styled(Flex)<StyledColumnProps>`
  flex-direction: column;
`
