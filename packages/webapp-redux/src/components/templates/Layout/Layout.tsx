import React, { useRef } from 'react'
import { Column, Row } from '@myscope/common'

import { ContentInner, ContentWrapper, ScrollWrapper } from './Layout.style'

export const Layout: React.FC = ({ children }) => {
  const scrollNode = useRef<HTMLDivElement>(null)

  if (scrollNode?.current?.scrollTo) {
    scrollNode.current.scrollTo(0, 0)
  }

  return (
    <Column width="100%" flexDirection="column">
      <Row width="100%">
        <ScrollWrapper ref={scrollNode}>
          <ContentWrapper>
            <ContentInner>{children}</ContentInner>
          </ContentWrapper>
        </ScrollWrapper>
      </Row>
    </Column>
  )
}
