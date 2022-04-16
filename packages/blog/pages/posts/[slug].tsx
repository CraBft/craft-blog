import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { CraftPage } from 'react-craft-x'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getAllPosts } from '../../libs/post-api'
import { CraftBlogPage } from '../../types/CraftBlogPage'
import Header from '../../components/Header'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params!

  const posts = await getAllPosts()

  const postIndex = posts.findIndex((post) => post.id === slug)

  if (postIndex === -1) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      page: posts[postIndex],
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const posts = await getAllPosts()

  const paths: GetStaticPathsResult['paths'] = posts.map((post) => {
    return {
      params: {
        slug: post.id,
      },
    }
  })

  return {
    fallback: false,
    paths,
  }
}

const PostPage: NextPage<{
  page: CraftBlogPage
}> = ({ page }) => {
  const StyledCraftPage = styled(CraftPage)`
    margin-left: auto;
    margin-right: auto;
  `

  return (
    <>
      <Header />
      <StyledCraftPage rootBlock={page.rootBlock} />
    </>
  )
}

export default PostPage
