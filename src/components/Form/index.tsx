import { useState } from 'react';
import { MySituation } from '../Situation';
import { Container, NameBox, Input, Button, Select, Box } from './styles';

export default function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [select, setSelect] = useState<string>('message');
  console.log(select);

  const options = [
    {
      disabled: true,
      defaultValue: 'message',
      label: 'What type of message?',
      value: 'message',
    },
    {
      label: 'FullStack Job',
      value: 'fullstack',
    },

    {
      label: 'BackEnd Job',
      value: 'backend',
    },

    {
      label: 'FrontEnd Job',
      value: 'frontend',
    },

    {
      label: 'Other',
      value: 'other',
    }
  ]

  return (
    <Container id="formEmail">
      <Box>
        <MySituation />

        <form action="submit" method="POST">
          <NameBox>
            <Input required type="text" name="first" id="first" placeholder="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
            <Input required type="text" name="last" id="last" placeholder="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
          </NameBox>
          <Input required type="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)} />

          <Select
            required
            name="message"
            id="message"
            placeholder="Select your Message"
            value={select}
            onChange={event => setSelect(event.target.value)}>

            {options.map((op, index) => (
                <option key={index} value={op.value} disabled={op.disabled} defaultValue={op.defaultValue}>{op.label}</option>
              )
            )}
          </Select>

          <Button type="submit" />
        </form>
      </Box>

    </Container>
  )
}
