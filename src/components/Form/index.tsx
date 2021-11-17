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
            <option value={0} disabled defaultValue={0}>Whats kind message?</option>
            <option value={1}>FullStack</option>
            <option value={2}>FrontEnd</option>
            <option value={3}>BackEnd</option>
            <option value={4}>Other</option>
          </Select>

          <Button type="submit" />
        </form>
      </Box>

    </Container>
  )
}
