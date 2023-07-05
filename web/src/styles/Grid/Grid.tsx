import React from 'react'

import { Grid as GridWrapper } from './Grid.styled'

type GridProps = {
  children: React.ReactNode
}
export const Grid = ({ children }: GridProps) => {
  return <GridWrapper>{children}</GridWrapper>
}
