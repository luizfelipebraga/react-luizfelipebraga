import { Container, SpanCreatedBy, Img } from './styles';
import CvImg from '../../svgs/profile-ruivo.svg';

export function Footer() {
  return (
    <Container>
      <Img src={CvImg} />
      <a href="https://github.com/luizfelipebraga" target="_blank" rel="noreferrer">
        <SpanCreatedBy>Created by: Luiz Felipe</SpanCreatedBy>
      </a>
    </Container>
  )
}
