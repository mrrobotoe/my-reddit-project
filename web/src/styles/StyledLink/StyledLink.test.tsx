import { render } from '@redwoodjs/testing/web'

import StyledLink from './StyledLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StyledLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StyledLink />)
    }).not.toThrow()
  })
})
