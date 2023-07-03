import { render } from '@redwoodjs/testing/web'

import RedditPostPage from './RedditPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RedditPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedditPostPage />)
    }).not.toThrow()
  })
})
