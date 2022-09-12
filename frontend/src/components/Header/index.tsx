import { Container, VerticalBar, GroupHeader, Description } from './styles'

import { Logo } from '../Logo'

interface Props {
  title: string
  color: string
}

export const Header = ({ title, color }: Props) => {
  return (
    <Container>
      <GroupHeader>
        <Logo />
        <VerticalBar color={color} />
        <Description>{title}</Description>
      </GroupHeader>
    </Container>
  )
}
