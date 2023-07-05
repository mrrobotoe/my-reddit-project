import styled, { css } from 'styled-components'

interface Props {
  rounded: boolean
}
export const Button = styled.button<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--s0);
  border: 2px solid var(--color-dark);
  background-color: var(--color-light);
  width: 100%;

  ${(props) =>
    props.rounded
      ? css`
          border-radius: var(--s3);
        `
      : css`
          border-radius: none;
        `}

  &:focus {
    border: 8px solid #155ed4;
  }

  &:active {
    background-color: var(--color-dark);
    color: var(--color-light);
  }
`
