import type { RedditPostsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RedditPost from 'src/components/RedditPost'
import { Center } from 'src/styles/Center/Center.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

export const QUERY = gql`
  query RedditPostsQuery {
    redditPosts: posts {
      id
      title
      body
      createdAt
      numOfComments
      numOfLikes
      imageLink
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
    <Center $intrinsic={true}>
      <Stack>
        {redditPosts.map((item) => (
          <RedditPost key={item.id} redditPost={item} summary={true} />
        ))}
      </Stack>
    </Center>
  )
}
