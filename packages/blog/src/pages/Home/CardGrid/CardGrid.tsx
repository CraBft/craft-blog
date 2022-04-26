import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import Styled from './CardGrid.styled'

export default function CardGrid({}) {
  const dummyJson = [
    {
      img: 'https://cdn.pixabay.com/photo/2021/12/02/18/38/seagulls-6841129_1280.jpg',
      alt: 'derweg',
      title: 'TItlettielt',
      description: '안녕하세요 안녕안녕',
      date: '00.00.00',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2021/12/02/18/38/seagulls-6841129_1280.jpg',
      alt: 'derweg',
      title: 'TItlettielt',
      description: '안녕하세요 안녕안녕',
      date: '00.00.00',
    },
    {
      title: 'TITTLTLE',
      description: 'hihihihihi',
      date: '00.00.00',
    },
    {
      title: 'TITTLTLE',
      description: 'hihihihihi',
      date: '00.00.00',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2021/12/02/18/38/seagulls-6841129_1280.jpg',
      alt: 'derweg',
      title: 'TItlettielt',
      description: '안녕하세요 안녕안녕',
      date: '00.00.00',
    },
    {
      title: 'TITTLTLE',
      description: 'hihihihihi',
      date: '00.00.00',
    },
    {
      title: 'TITTLTLE',
      description: 'hihihihihi',
      date: '00.00.00',
    },
  ]

  const Cards = dummyJson.map((i, idx) => (
    <Styled.cardContainer key={idx}>
      <Styled.card img={i.img} alt={i.alt} title={i.title} description={i.description} date={i.date} />
    </Styled.cardContainer>
  ))
  return (
    <MasonryInfiniteGrid gap={10} percentage={true} column={0} useTransform={true} useResizeObserver={true}>
      {Cards}
    </MasonryInfiniteGrid>
  )
}
