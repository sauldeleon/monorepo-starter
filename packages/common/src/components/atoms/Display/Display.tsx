import React from 'react'

type IDisplay = {
  show: unknown
}

export const Display: React.FunctionComponent<IDisplay> = ({ children, show }) =>
  (Boolean(show) && <>{children}</>) || null
