import React from 'react'

const DivTemplate: React.FC = ({ children, ...rest }) => (
  <div style={{ margin: 10 }} {...rest}>
    {children}
  </div>
)

export const generateItems = (num: number) =>
  Array.from(Array(num).keys()).map((elem, index) => <DivTemplate key={index}>Item{index}</DivTemplate>)
