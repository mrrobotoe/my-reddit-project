import type {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'

import CommentForm from './CommentForm'

export const generated = () => {
  mockGraphQLMutation<CreateCommentMutation, CreateCommentMutationVariables>(
    'CreateCommentMutation',
    (variables, { ctx }) => {
      const id = Math.floor(Math.random() * 1000)
      ctx.delay(1000)

      return {
        createComment: {
          id,
          name: 'John Doe',
          numOfLikes: 1,
          numOfComments: 0,
          body: variables.input.body,
          createdAt: new Date().toISOString(),
        },
      }
    }
  )

  return <CommentForm postId={1} />
}

export default { title: 'Components/CommentForm' }
