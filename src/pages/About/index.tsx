import {
  AboutSection,
  Container,
  MyselfImg,
  AboutBox
} from './styles';
import FelipeImg from '../../images/myselfpicture.jpg';

export function AboutPage() {
  return (
    <AboutSection>

      <Container>
        <MyselfImg src={FelipeImg} alt="Felipe imagem" />

        <AboutBox>
          <h1><span>0.2</span> About Me</h1>
        </AboutBox>
      </Container>
      
    </AboutSection>
  )
}
