import { routes } from '@redwoodjs/router'

import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'
import StyledLink from 'src/styles/StyledLink'
type RedditLayoutProps = {
  children?: React.ReactNode
}

const RedditLayout = ({ children }: RedditLayoutProps) => {
  return (
    <Box>
      <Stack>
        <Box>
          <Cluster>
            <StyledLink to={routes.home()} paramName="Home" />
            <StyledLink to="#" paramName="Search" />
            <StyledLink to="#" paramName="Subreddits" />
          </Cluster>
        </Box>
        <Box>
          <Stack>{children}</Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default RedditLayout
