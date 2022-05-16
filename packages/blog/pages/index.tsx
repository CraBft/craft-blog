import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../libs/post-api'
import Home from '../src/pages/Home/Home'

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  const posts = getAllPosts()

  return {
    props: {
      posts: posts.map((post) => {
        return {
          id: post.id,
          title: post.rootBlock.content.map((text) => text.text).join(''),
        }
      }),
    },
  }
}
export type GetStaticProps = React.ComponentProps<typeof HomePage>

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

export default HomePage
