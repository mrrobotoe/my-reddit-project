// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RedditPost> = (args) => {
//   return <RedditPost {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RedditPost from './RedditPost'

export const generated = () => {
  return <RedditPost />
}

export default {
  title: 'Components/RedditPost',
  component: RedditPost,
} as ComponentMeta<typeof RedditPost>
