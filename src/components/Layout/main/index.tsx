import { AuthorNameComponent } from "../../Name";
import { NavBar } from "../../NavBar"
import { SocialMediaSideBar } from "../../SocialMedias";
import { Container, Content, SimpleBarStyled } from "./styles"

import 'simplebar/dist/simplebar.min.css';

export const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <SocialMediaSideBar />
      <AuthorNameComponent />

      <SimpleBarStyled>
        <Content>
          {children}
        </Content>
      </SimpleBarStyled>



    </Container>
  )
}
