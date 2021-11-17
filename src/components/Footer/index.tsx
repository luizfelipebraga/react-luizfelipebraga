import { Container, SpanCreatedBy, Img } from './styles';
import CvImg from '../../svgs/profile-ruivo.svg';

export function Footer() {
  return (
    <Container>
      <Img src={CvImg}/>
      <SpanCreatedBy>Created By: Luiz Felipe</SpanCreatedBy>
    </Container>
  )
}
