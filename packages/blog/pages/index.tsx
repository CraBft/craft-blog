import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../libs/post-api'

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const posts = await getAllPosts()

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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <div>
      <h1>craft-blog-starter</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <a>
            <p>{post.title}</p>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Home
