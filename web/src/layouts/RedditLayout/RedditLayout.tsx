import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'
import StyledLink from 'src/styles/StyledLink'

type RedditLayoutProps = {
  children?: React.ReactNode
}

const RedditLayout = ({ children }: RedditLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <Box>
      <Stack>
        <Box>
          <Cluster>
            <StyledLink to={routes.home()} paramName="Home" />
            <StyledLink to="#" paramName="Search" />
            <StyledLink to="#" paramName="Subreddits" />
            {isAuthenticated ? (
              <Box as="button" onClick={logOut}>
                Logged in as {currentUser.email}
              </Box>
            ) : (
              <StyledLink to={routes.login()} paramName="Login" />
            )}
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
