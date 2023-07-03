import styled from 'styled-components'

interface BoxProps {
  padding?: string
  inverted?: boolean
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>`
  padding: ${(props) => (props.padding ? `${props.padding}` : `var(--s-2)`)};
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;

  & * {
    color: inherit;
  }
`
