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

const REDDIT_POST = {
  id: 1,
  body: 'body content goes here body content goes here body content goes here body content goes here body content goes herebody content goes here.',
  title: 'This is a title',
  createdAt: '2023-05-05T12:34:56Z',
  numOfComments: 0,
  numOfLikes: 1,
}

export const full = () => {
  return <RedditPost redditPost={REDDIT_POST} />
}

export const summary = () => {
  return <RedditPost redditPost={REDDIT_POST} summary={true} />
}

export default {
  title: 'Components/RedditPost',
  component: RedditPost,
} as ComponentMeta<typeof RedditPost>
