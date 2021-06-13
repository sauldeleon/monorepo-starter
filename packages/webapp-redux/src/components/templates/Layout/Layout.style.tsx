import styled from '@emotion/styled'
const headerHeight = 0

export const ScrollWrapper = styled.div`
  height: calc(100vh - ${headerHeight}px);
  width: 100%;
  overflow: scroll;
`
export const ContentWrapper = styled.div`
  height: auto;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const ContentInner = styled.div`
  height: auto;
  width: 100%;
`
