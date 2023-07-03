import type { ComponentMeta } from '@storybook/react'

import RedditPostPage from './RedditPostPage'

export const generated = () => {
  return <RedditPostPage />
}

export default {
  title: 'Pages/RedditPostPage',
  component: RedditPostPage,
} as ComponentMeta<typeof RedditPostPage>
