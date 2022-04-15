import { CraftTextBlock } from '@craftdocs/craft-extension-api'

export type CraftBlogPage = {
  /**
   * 페이지의 id (craft에서 페이지의 루트 블록의 id)
   */
  id: string
  /**
   * 해당 페이지의 부모 페이지의 id
   */
  parentId: string | null
  /**
   * 블로그에 최초 배포 등록 시점
   */
  publishedAt: string
  /**
   * 블로그에 배포 업데이트 시점
   */
  updatedAt: string
  /**
   * 페이지의 Root Block Data
   */
  rootBlock: CraftTextBlock
}
