import {
  AboutSection,
  BoxIntroduce,
  Container,
  MyselfImg
} from './styles';

import { SubTitle } from '../../components/SubTitle';
import FelipeImg from '../../images/picture-updated.jpg';

export function AboutPage() {
  const date = new Date().getFullYear();
  const age = date - 2003;

  return (
    <AboutSection id="about">
      <SubTitle number={'02'} title={'About Me'} />

      <Container>
        <div>
          <MyselfImg src={FelipeImg} alt="Felipe image" loading="lazy" />
        </div>
        <BoxIntroduce>
          <p>Hi! My name Luiz, {age} years. - <strong>JavaScript Full Stack Developer</strong>
            <br /> I am a person who always looking for constant technical and personal evolution.
            My programming world started when i was 16 years at the <strong>Senai Technical School of Informatics</strong>,
            where I saw principles that opened my eyes to the world of programming.
          </p>

          <p>I've learned languages
            like: Csharp, SqlServer, HTML, CSS and JavaScript and beyond, I've been learning other concepts
            like <br /> <strong>NodeJs and ReactJs with TypeScript</strong>, Firebase, MongoDb (basic), Spring Framework, Docker and
            currently studying to get my AWS Solutions Architect certification.
          </p>
        </BoxIntroduce>
      </Container>
    </AboutSection >
  )
}
