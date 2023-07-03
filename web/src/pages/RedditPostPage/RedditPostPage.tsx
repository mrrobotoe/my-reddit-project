import { MetaTags } from '@redwoodjs/web'

import RedditPostCell from 'src/components/RedditPostCell'

interface Props {
  id: number
}
const RedditPostPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="RedditPost" description="RedditPost page" />

      <RedditPostCell id={id} />
    </>
  )
}

export default RedditPostPage
