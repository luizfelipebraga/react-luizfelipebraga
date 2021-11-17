import Form from "../../components/Form";
import { MouseScroll } from "../../components/MouseScroll";
import { NeedDev } from "../../components/NeedDev";
import { SubTitle } from "../../components/SubTitle";
import { ContactSection } from "./styles";

export function ContactPage() {
  return (
    <ContactSection id="contact">
        <NeedDev/>
        <MouseScroll/>
        <SubTitle number={'04'} title={'Contact'} />
        <Form/>
    </ContactSection>
  )
}
