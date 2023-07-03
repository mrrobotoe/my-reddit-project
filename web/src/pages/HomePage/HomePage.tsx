import { MetaTags } from '@redwoodjs/web'

import RedditPostsCell from 'src/components/RedditPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <RedditPostsCell />
    </>
  )
}

export default HomePage
