import type { ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export const generated = () => {
  return <Button buttonType="button" label="submit" />
}

export const rounded = () => {
  return <Button buttonType="button" rounded label="rounded" />
}
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>
