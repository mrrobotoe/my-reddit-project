import styled from 'styled-components'

import { Form, Submit, TextAreaField, FormError } from '@redwoodjs/forms'

import { Cluster } from 'src/styles/Cluster/Cluster.styled'

export const FormStyled = styled(Form)`
  border-color: gray;
  border: 1px solid;
  border-radius: var(--s-4);

  &:focus {
    border-color: var(--color-light);
  }
`
export const TextAreaFieldStyled = styled(TextAreaField)`
  padding: var(--s-1);
  background-color: var(--color-dark);
  color: var(--color-light);
  font-size: var(--s0);
  border: none;
  border-top-right-radius: var(--s-4);
  border-top-left-radius: var(--s-4);
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
  outline: none;
  resize: vertical;
`

export const FormErrorStyled = styled(FormError)`
  color: red;
`

export const BottomContainer = styled(Cluster)`
  padding: var(--s-2);
  background-color: #444;
  border-bottom-right-radius: var(--s-4);
  border-bottom-left-radius: var(--s-4);
`

export const StyledButton = styled(Submit)`
  border-radius: var(--s-4);
  background-color: var(--color-light);
  color: var(--color-dark);
  padding: var(--s-3);
  font-weight: lighter;

  &:hover {
    background-color: var(--color-light);
  }
  &:disabled {
    color: #999;
  }
`
