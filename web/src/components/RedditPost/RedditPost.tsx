import moment from 'moment'
import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Frame } from 'src/styles/Frame/Frame.styled'
import { Icon, WithIcon } from 'src/styles/Icon/Icon.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { CommentArrowDown, CommentArrowUp } from '../Comment/Comment.styled'

import CommentIcon from './commentIcon.svg'
import { RedditPostContainer, RedditPostWrapper } from './RedditPost.styled'

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}
interface Props {
  redditPost: Post
  summary?: boolean
}

const RedditPost = ({ redditPost, summary = false }: Props) => {
  return (
    <Stack>
      <RedditPostWrapper>
        <RedditPostContainer>
          <Stack space={'var(--s-4)'}>
            <Box>
              <header>
                <h4>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={routes.redditPost({ id: redditPost.id })}
                  >
                    {redditPost.title}
                  </Link>
                </h4>
              </header>
              <span style={{ fontWeight: 'bold', fontSize: 'var(--s-1)' }}>
                @UserName{' '}
              </span>
              <span style={{ fontSize: 'var(--s-1)' }}>
                {moment(redditPost.createdAt).fromNow()}
              </span>
            </Box>
            {redditPost.imageLink && (
              <Box>
                <Frame>
                  <img src={redditPost.imageLink} alt={redditPost.imageLink} />
                </Frame>
              </Box>
            )}
          </Stack>
          <Stack space="var(--s-2)">
            <Box>
              {summary ? truncate(redditPost.body, 100) : redditPost.body}
            </Box>
            <Cluster>
              <Box>
                <WithIcon>
                  <Icon $withIcon={true}>
                    <CommentIcon />
                  </Icon>
                  {redditPost.numOfComments}
                </WithIcon>
              </Box>
              <Box>
                <Cluster space="var(--s-1)">
                  <CommentArrowUp />
                  {redditPost.numOfLikes}
                  <CommentArrowDown />
                </Cluster>
              </Box>
            </Cluster>
            {!summary && (
              <Box>
                <CommentForm postId={redditPost.id} />
              </Box>
            )}
          </Stack>
        </RedditPostContainer>
      </RedditPostWrapper>
      {!summary && <CommentsCell postId={redditPost.id} />}
    </Stack>
  )
}

export default RedditPost
