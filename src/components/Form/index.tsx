import { useState } from 'react';
import { MySituation } from '../Situation';
import { Container, NameBox, Input, Button, Select, Box, TextArea } from './styles';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [select, setSelect] = useState<string>('type');
  const [message, setMessage] = useState<string>('');

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('service_beg4kfb', 'gmail', event.target, 'user_WRCVefRiFlT2Ki4K4A3tR')
      .then(() => {
        const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(functionThatReturnPromise, {
          pending: 'Loading',
          success: 'Email has sent, thank you!',
          error: 'Something happened, try again.'
        })
      }, (error) => {
        toast.error("Something happened, try again.");
        console.error(error.text);
      });
  };

  const options = [
    {
      disabled: true,
      defaultValue: 'type',
      label: 'What type of message?',
      value: 'type',
    },
    {
      label: 'Full Stack Job',
      value: 'FULL STACK JOB',
    },

    {
      label: 'Back-end Job',
      value: 'BACKEND JOB',
    },

    {
      label: 'Front-end Job',
      value: 'FRONTEND JOB',
    },

    {
      label: 'Other',
      value: 'OTHERS',
    }
  ]

  return (
    <Container id="formEmail">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

      <Box>
        <MySituation />

        <form onSubmit={sendEmail}>
          <NameBox>
            <Input required type="text" name="first" id="first" placeholder="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
            <Input required type="text" name="last" id="last" placeholder="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
          </NameBox>
          <Input required type="email"
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

          <TextArea name="message" id="message" value={message} onChange={event => setMessage(event.target.value)} placeholder="Message" rows={3} cols={50} />

          <Button type="submit" value="Send" />
        </form>
      </Box>

    </Container>
  )
}
