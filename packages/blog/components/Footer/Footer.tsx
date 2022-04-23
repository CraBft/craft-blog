import Styled from './Footer.styled'
import { siGithub } from 'simple-icons/icons'
import siReact from 'simple-icons/icons/react'
import { Git, Github, Instagram, Kakao, Linkedin } from '@icons-pack/react-simple-icons'

const Icons = {
  Git,
  Github,
  Instagram,
  Kakao,
  Linkedin,
}

export type FooterProps = {
  links: {
    name: keyof typeof Icons
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <Styled.container>
      <Styled.ul>
        {links.map((link) => {
          const { name, url } = link
          return (
            <Styled.li key={id}>
              <Styled.anchor href={url} target="_blank" aria-label={name}>
                <Github color="white" size={24} />
                {/* <Image src={`/assets/${name}.png`} alt={name} width={'40px'} height={'40px'} quality={100} /> */}
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
