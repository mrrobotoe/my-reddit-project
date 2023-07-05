import moment from 'moment'

import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import {
  CommentName,
  CommentDateTime,
  CommentArrowUp,
  CommentArrowDown,
  CommentLikes,
  CommentBody,
  CommentContainer,
} from './Comment.styled'
// const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
//   const parsedDate = new Date(datetime)
//   const month = parsedDate.toLocaleString('default', { month: 'long' })
//   return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
// }

interface Props {
  comment: {
    name: string
    createdAt: string
    body: string
    numOfLikes: number
    numOfComments: number
  }
}

const Comment = ({ comment }: Props) => {
  return (
    <>
      <CommentContainer>
        <Stack space="var(--s-3)">
          <Cluster space={'var(--s-1)'}>
            <CommentName>{comment.name}</CommentName>
            <CommentDateTime dateTime={comment.createdAt}>
              {moment(comment.createdAt).fromNow()}
            </CommentDateTime>
          </Cluster>
          <CommentBody>{comment.body}</CommentBody>
          <Cluster space="var(--s0)">
            <CommentArrowUp />
            <CommentLikes>{comment.numOfLikes}</CommentLikes>
            <CommentArrowDown />
          </Cluster>
        </Stack>
      </CommentContainer>
    </>
  )
}

export default Comment
