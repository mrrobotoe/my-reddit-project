import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

interface Props {
  redditPost: Post
}
const RedditPost = ({ redditPost }: Props) => {
  return (
    <Stack>
      <Box>
        <header>
          <h2>
            <Link to={routes.redditPost({ id: redditPost.id })}>
              {redditPost.title}
            </Link>
          </h2>
        </header>
        <Box>{redditPost.body}</Box>
        <Cluster>
          <Box>Comments: {redditPost.numOfComments}</Box>
          <Box>Likes: {redditPost.numOfLikes}</Box>
        </Cluster>
        <Box>Posted at: {redditPost.createdAt}</Box>
      </Box>
    </Stack>
  )
}

export default RedditPost
