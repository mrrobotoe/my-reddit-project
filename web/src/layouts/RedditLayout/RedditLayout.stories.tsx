import type { ComponentMeta, ComponentStory } from '@storybook/react'

import RedditLayout from './RedditLayout'

export const generated: ComponentStory<typeof RedditLayout> = (args) => {
  return <RedditLayout {...args} />
}

export default {
  title: 'Layouts/RedditLayout',
  component: RedditLayout,
} as ComponentMeta<typeof RedditLayout>
