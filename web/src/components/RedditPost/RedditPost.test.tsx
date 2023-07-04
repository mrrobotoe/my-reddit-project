import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

import RedditPost from './RedditPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const REDDIT_POST = {
  id: 1,
  body: 'body content goes here body content goes here body content goes here body content goes here body content goes herebody content goes here.',
  title: 'This is a title',
  createdAt: '2023-05-05T12:34:56Z',
  numOfComments: 0,
  numOfLikes: 1,
}

describe('RedditPost', () => {
  it('renders a reddit post', () => {
    render(<RedditPost redditPost={REDDIT_POST} />)

    expect(screen.getByText(REDDIT_POST.title)).toBeInTheDocument()
    expect(screen.getByText(REDDIT_POST.body)).toBeInTheDocument()
  })

  it('renders comments when displaying a full blog post', async () => {
    const comment = standard().comments[0]

    render(<RedditPost redditPost={REDDIT_POST} />)

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    )
  })

  it('renders a summary of a reddit post', () => {
    render(<RedditPost redditPost={REDDIT_POST} summary={true} />)
    expect(screen.getByText(REDDIT_POST.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'body content goes here body content goes here body content goes here body content goes here body con...'
      )
    ).toBeInTheDocument()
  })

  it('does not render comments when displaying a summary', async () => {
    const comment = standard().comments[0]
    render(<RedditPost redditPost={REDDIT_POST} summary={true} />)

    await waitFor(() =>
      expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
    )
  })
})
