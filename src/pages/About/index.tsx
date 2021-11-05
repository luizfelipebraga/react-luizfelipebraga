import {
  AboutSection,
  Container,
  MyselfImg,
  AboutBox,
  BoxIntroduce
} from './styles';
import FelipeImg from '../../images/myselfpicture.jpg';

export function AboutPage() {
  return (
    <AboutSection>

      <AboutBox>
        <h2><span>02.</span> About Me</h2>
      </AboutBox>

      <Container>
        <MyselfImg src={FelipeImg} alt="Felipe imagem" />

        <BoxIntroduce>
          <p>Hi! My name Luiz, 18 years. - <strong>JavaScript Full Stack Developer</strong>
          <br/> I am a person who always looking for constant technical and personal evolution.
            My programming world started when i was 16 years at the <strong>Senai Technical School of Informatics</strong>,
            where I saw principles that opened my eyes to the world of programming.
          </p>

          <p>I've learned languages
            like: Csharp, SqlServer, HTML, CSS and JavaScript and beyond, I've been learning other concepts
            like <br/> <strong>NodeJs and ReactJs with TypeScript</strong>, Firebase, MongoDb (basic), Spring Framework, Docker and
            currently studying to get my AWS Solutions Architect certification.
          </p>
        </BoxIntroduce>
      </Container>

    </AboutSection >
  )
}
