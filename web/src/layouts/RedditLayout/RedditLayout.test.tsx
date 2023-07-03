import { render } from '@redwoodjs/testing/web'

import RedditLayout from './RedditLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RedditLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedditLayout />)
    }).not.toThrow()
  })
})
