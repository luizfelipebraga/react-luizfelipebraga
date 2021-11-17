import { MySituation } from '../Situation';
import { Container, NameBox, Input, Button, Select, Box } from './styles';

export default function Form() {
  return (
    <Container id="formEmail">
      <Box>
        <MySituation />

        <form action="submit" method="POST">
          <NameBox>
            <Input type="text" name="first" id="first" placeholder="First Name" style={{ width: '50%' }} />
            <Input type="text" name="last" id="last" placeholder="Last Name" style={{ width: '50%' }} />
          </NameBox>
          <Input type="email" name="email" id="email" placeholder="Email" />

          <Select name="message" id="message" placeholder="Select your Message">
            <option value="" disabled selected>Whats kind message?</option>
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
