import { MySituation } from '../Situation';
import { Container, NameBox, Input, Button, Select, Box } from './styles';

export default function Form() {
  return (
    <Container id="formEmail">
      <Box>
        <MySituation />

        <form action="submit" method="POST">
          <NameBox>
            <Input required type="text" name="first" id="first" placeholder="First Name" />
            <Input required type="text" name="last" id="last" placeholder="Last Name"/>
          </NameBox>
          <Input required type="email"  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" id="email" placeholder="Email" />

          <Select  required name="message" id="message" placeholder="Select your Message">
            <option value="op0" disabled defaultValue={"Whats kind message?"}>Whats kind message?</option>
            <option value="op1">FullStack</option>
            <option value="op2">FrontEnd</option>
            <option value="op3">BackEnd</option>
            <option value="op4">Other</option>
          </Select>

          <Button type="submit" />
        </form>
      </Box>

    </Container>
  )
}
