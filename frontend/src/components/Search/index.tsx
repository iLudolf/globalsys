import { Container, IcoBellSimple } from './styles'

interface Props {
  handleSearch: () => void
}

export const Search = ({ handleSearch }: Props) => {
  return (
    <Container onClick={handleSearch}>
      <IcoBellSimple size={25} />
    </Container>
  )
}
