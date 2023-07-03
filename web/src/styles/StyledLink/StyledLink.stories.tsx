// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StyledLink> = (args) => {
//   return <StyledLink {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StyledLink from './StyledLink'

export const generated = () => {
  return <StyledLink />
}

export default {
  title: 'Components/StyledLink',
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>
