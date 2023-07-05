import { Stack } from '../Stack/Stack.styled'

import { Button as StyledButton } from './Button.styled'

interface Props {
  buttonType: 'submit' | 'button' | 'reset'
  label: string
  rounded?: boolean
}
export const Button = ({ buttonType, label, ...rest }: Props) => {
  return (
    <Stack>
      <StyledButton {...rest} type={buttonType}>
        {label}
      </StyledButton>
    </Stack>
  )
}
