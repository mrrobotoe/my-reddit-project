import styled from 'styled-components'

import { Link, useMatch } from '@redwoodjs/router'

import { Box } from 'src/styles/Box/Box.styled'

interface Props {
  to: string
  paramName: string
}
const StyledLink = ({ to, paramName }: Props) => {
  const matchInfo = useMatch(to)
  return (
    <StyledLinkComponent $isActive={matchInfo.match} as={Link} to={to}>
      {paramName}
    </StyledLinkComponent>
  )
}

export default StyledLink

interface StyledProps {
  $isActive: boolean
}

const StyledLinkComponent = styled(Box)<StyledProps>`
  padding: var(--s-4) var(--s-2);
  text-decoration: none;
  border-radius: var(--s-3);
  transition: background-color 100ms ease, color 100ms ease;
  background-color: ${(props) => props.$isActive && 'var(--color-dark)'};
  color: ${(props) => props.$isActive && 'var(--color-light)'};
  &:hover {
    background-color: var(--color-neutral);
    color: var(--color-light);
  }
`
