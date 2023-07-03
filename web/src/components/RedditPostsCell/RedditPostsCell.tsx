import type { RedditPostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query RedditPostsQuery {
    redditPosts: posts {
      id
      title
      body
      createdAt
      numOfComments
      numOfLikes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  redditPosts,
}: CellSuccessProps<RedditPostsQuery>) => {
  return (
    <ul>
      {redditPosts.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
