import { useState, useRef, FormEvent } from 'react';
import { MySituation } from '../Situation';
import { Container, NameBox, Input, Button, Select, Box, TextArea } from './styles';
import emailjs from 'emailjs-com';

export function Form(){
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [select, setSelect] = useState<string>('type');
  const [message, setMessage] = useState<string>('');
  console.log(message)

  // const form = useRef<HTMLInputElement | null>();

  // const valueRef = form.current ? form.current : '';

  // const sendEmail = (event: FormEvent) => {
  //   event.preventDefault();


  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  const options = [
    {
      disabled: true,
      defaultValue: 'type',
      label: 'What type of message?',
      value: 'type',
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

        <form>
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
            name="type"
            id="type"
            placeholder="Select your Message"
            value={select}
            onChange={event => setSelect(event.target.value)}>

            {options.map((op, index) => (
              <option key={index} value={op.value} disabled={op.disabled} defaultValue={op.defaultValue}>{op.label}</option>
            )
            )}
          </Select>

          <TextArea id="message" value={message} onChange={event => setMessage(event.target.value)} placeholder="Message" rows={3} cols={50}/>

          <Button type="submit" value="Send" />
        </form>
      </Box>

    </Container>
  )
}
