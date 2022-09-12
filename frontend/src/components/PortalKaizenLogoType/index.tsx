import { Logo } from '../Logo'
import { Container, VerticalBar, Description } from './styles'

interface IPros {
  color: string
  description: string
  url?: string
}

export const PortalKaizenLogoType = ({ color, description, url }: IPros) => {
  return (
    <Container href={url}>
      <Logo />

      <VerticalBar color={color} />

      <Description>{description}</Description>
    </Container>
  )
}
