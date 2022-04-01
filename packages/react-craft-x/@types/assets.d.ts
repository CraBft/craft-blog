declare module '*.jpg' {
  const content: {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }

  export default content
}
