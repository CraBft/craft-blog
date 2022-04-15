import fs from 'fs'
import path from 'path'
import { CraftBlogPage } from '../types/CraftBlogPage'

const postsDirectory = path.join(process.cwd(), '../../_contents/posts')

export const getAllPosts = () => {
  const postPaths = fs.readdirSync(postsDirectory).filter((path) => path.endsWith('.json'))

  return postPaths
    .map((postPath) => {
      const fullPath = path.join(postsDirectory, postPath)
      const data: CraftBlogPage = JSON.parse(fs.readFileSync(fullPath).toString())
      return data
    })
    .sort((postA, postB) => Date.parse(postA.publishedAt) - Date.parse(postB.publishedAt))
}
