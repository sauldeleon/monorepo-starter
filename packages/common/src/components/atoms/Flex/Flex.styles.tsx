import styled from '@emotion/styled'
import { Property as CSSProperty } from 'csstype'

export interface StyledFlexProps extends DivProps {
  /****** Container Props ********/
  flexDirection?: CSSProperty.FlexDirection
  justifyContent?: CSSProperty.JustifyContent
  flexWrap?: CSSProperty.FlexWrap
  alignItems?: CSSProperty.AlignItems
  /****** Child Props ********/
  flexGrow?: CSSProperty.FlexGrow
  flexShrink?: CSSProperty.FlexShrink
  flexBasis?: CSSProperty.FlexBasis
  flex?: CSSProperty.Flex
  /****** Common Layout Props ********/
  margin?: CSSProperty.Margin
  padding?: CSSProperty.Padding
  width?: CSSProperty.Width
  height?: CSSProperty.Height
  maxWidth?: CSSProperty.MaxWidth
  maxHeight?: CSSProperty.MaxHeight
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-grow: ${props => props.flexGrow || 0};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-shrink: ${props => props.flexShrink || 1};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  flex: ${props => props.flex || '0 1 auto'};
  align-items: ${props => props.alignItems || 'stretch'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || 'none'};
  max-height: ${props => props.maxHeight || 'none'};
`
