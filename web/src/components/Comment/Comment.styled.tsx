import styled from 'styled-components'

import { Box } from 'src/styles/Box/Box.styled'

export const CommentContainer = styled(Box)`
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`
export const CommentName = styled.h5`
  text-transform: uppercase;
`

export const CommentDateTime = styled.time`
  font-size: var(--s-1);
`

export const CommentLikes = styled.p`
  font-size: var(--s-1);
`

export const CommentBody = styled.p`
  font-size: var(--s-1);
`
export const CommentArrowUp = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    transition: transform 150ms ease, color 100ms ease;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 4px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 7px;
  }
  &::before {
    width: 2px;
    height: 16px;
    left: 10px;
    background: currentColor;
  }

  &:hover {
    transform: scale(1.4);
  }

  &:active {
    color: magenta;
  }
`

export const CommentArrowDown = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    transition: transform 150ms ease, color 100ms ease;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    bottom: 4px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(-45deg);
    left: 7px;
  }
  &::before {
    width: 2px;
    height: 16px;
    left: 10px;
    background: currentColor;
  }

  &:hover {
    transform: scale(1.4);
  }

  &:active {
    color: magenta;
  }
`
