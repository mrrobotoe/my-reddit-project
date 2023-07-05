import { SubmitHandler, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { QUERY as CommentsQuery } from 'src/components/CommentsCell'
import { Stack } from 'src/styles/Stack/Stack.styled'

import {
  BottomContainer,
  StyledButton,
  TextAreaFieldStyled,
  FormErrorStyled,
  FormStyled,
} from './CommentForm.styled'

const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
      numOfLikes
      numOfComments
    }
  }
`

interface FormValues {
  name: string
  comment: string
}

interface Props {
  postId: number
}

const CommentForm = ({ postId }: Props) => {
  const formMethods = useForm()
  const [createComment, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      formMethods.reset()
    },
    refetchQueries: [{ query: CommentsQuery, variables: { postId } }],
  })

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createComment({
      variables: {
        input: {
          postId,
          ...input,
          numOfComments: 0,
          numOfLikes: 1,
          name: 'John Doe',
        },
      },
    })
  }
  return (
    <Stack>
      <FormStyled formMethods={formMethods} onSubmit={onSubmit}>
        <FormErrorStyled error={error} />
        <Stack space="0">
          <TextAreaFieldStyled
            name="body"
            rows={5}
            placeholder="Reply to this post?"
            validation={{ required: true }}
          />
          <BottomContainer>
            <StyledButton disabled={loading}>Comment</StyledButton>
          </BottomContainer>
        </Stack>
      </FormStyled>
    </Stack>
  )
}

export default CommentForm
