import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAllPosts } from '../libs/post-api'
import Header from '../components/Header'

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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <>
      <Header />
      <div>
        <h1>craft-blog-starter</h1>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <a
              style={{
                margin: '0.5rem',
                fontSize: '1.5rem',
              }}
            >
              <p>{post.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
