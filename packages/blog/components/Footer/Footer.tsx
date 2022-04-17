import Styled from './Footer.styled'
import Image from 'next/image'

export type FooterProps = {
  links: {
    id: string
    name: string
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <Styled.container>
      <Styled.ul>
        {links.map((link) => {
          const { id, name, url } = link
          return (
            <Styled.li key={id}>
              <Styled.anchor href={url} target="_blank" aria-label={name}>
                <Image src={`/assets/${name}.png`} alt={name} width={'20px'} height={'20px'} />
              </Styled.anchor>
            </Styled.li>
          )
        })}
      </Styled.ul>
      <Styled.p>© crabft</Styled.p>
    </Styled.container>
  )
}

export default Footer
