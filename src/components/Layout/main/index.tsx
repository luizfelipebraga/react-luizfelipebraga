import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import { Footer } from "../../Footer";

import { AuthorNameComponent } from "../../Name";
import { NavBar } from "../../NavBar"
import { SocialMediaSideBar } from "../../SocialMedias";
import { Container, Content } from "./styles"

export const Main: React.FC = ({ children }) => {
  return (
    <Container>

      <NavBar />
      <SocialMediaSideBar />
      <AuthorNameComponent />

      <SimpleBar>
        <Content>
          {children}
        </Content>
      </SimpleBar>

      <Footer />

    </Container>
  )
}
