import type { CommentsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      createdAt
      numOfLikes
      numOfComments
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div style={{ fontSize: 'var(--s0)', textAlign: 'center' }}>
    No comments yet
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  return (
    <>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </>
  )
}
