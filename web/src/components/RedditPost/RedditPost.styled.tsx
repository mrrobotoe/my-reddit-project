import styled from 'styled-components'

import { Box } from 'src/styles/Box/Box.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

export const RedditPostWrapper = styled(Stack)``

export const RedditPostContainer = styled(Box)`
  background-color: var(--color-dark);
  color: var(--color-light);
  border-radius: var(--s-3);
`
export const StyledComment = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: var(--s-1);
    height: var(--s-1);
    border: 2px solid;
    border-bottom: 0;
    box-shadow: -6px 8px 0 -6px, 6px 8px 0 -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
  }
  &::before {
    border: 2px solid;
    border-top-color: transparent;
    border-bottom-left-radius: 20px;
    right: 4px;
    bottom: -6px;
    height: 6px;
  }
  &::after {
    height: var(--s-5);
    background: currentColor;
    box-shadow: 0 4px 0 0;
    left: 4px;
    top: 4px;
  }
`
