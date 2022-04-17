import { nanoid } from 'nanoid'
import Styled from './Footer.styled'
import Image from 'next/image'

export type FooterProps = {
  links: {
    id: string
    name: string
    url: string
  }[]
}

const Footer: React.FC = () => {
  const footerData = {
    links: [
      {
        id: nanoid(),
        name: 'github',
        url: '',
      },
      {
        id: nanoid(),
        name: 'email',
        url: '',
      },
      {
        id: nanoid(),
        name: 'kakao',
        url: '',
      },
      {
        id: nanoid(),
        name: 'instagram',
        url: '',
      },
    ],
  }

  return (
    <Styled.container>
      <Styled.ul>
        {footerData.links.map((link) => {
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
