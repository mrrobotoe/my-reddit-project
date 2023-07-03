import type {
  FindRedditPostQuery,
  FindRedditPostQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RedditPost from 'src/components/RedditPost'

export const QUERY = gql`
  query FindRedditPostQuery($id: Int!) {
    redditPost: post(id: $id) {
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

export const Failure = ({
  error,
}: CellFailureProps<FindRedditPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  redditPost,
}: CellSuccessProps<FindRedditPostQuery, FindRedditPostQueryVariables>) => {
  return <RedditPost key={redditPost.id} redditPost={redditPost} />
}
