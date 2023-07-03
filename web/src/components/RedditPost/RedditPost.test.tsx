import { render } from '@redwoodjs/testing/web'

import RedditPost from './RedditPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RedditPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedditPost />)
    }).not.toThrow()
  })
})
