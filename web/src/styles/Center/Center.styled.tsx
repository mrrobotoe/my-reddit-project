import styled, { css } from 'styled-components'
interface CenterProps {
  $intrinsic: boolean
}
export const Center = styled.div<CenterProps>`
  box-sizing: content-box;
  max-inline-size: 60ch;
  margin-inline: auto;
  ${(props) =>
    props.$intrinsic &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`
