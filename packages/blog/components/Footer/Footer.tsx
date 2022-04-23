import Styled from './Footer.styled'
import {
  Git,
  Gmail,
  Github,
  Instagram,
  Kakao,
  Linkedin,
  Facebook,
  Twitter,
  Pinterest,
} from '@icons-pack/react-simple-icons'

const Icons = {
  git: Git,
  github: Github,
  instagram: Instagram,
  kakao: Kakao,
  linkedin: Linkedin,
  gmail: Gmail,
  facebook: Facebook,
  twitter: Twitter,
  pinterest: Pinterest,
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
        {links.map((link, idx) => {
          const { name, url } = link
          const Icon = Icons[name]
          return (
            <Styled.li key={idx}>
              <Styled.anchor href={url} target="_blank" aria-label={name}>
                <Icon color={'white'} size={20} />
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
