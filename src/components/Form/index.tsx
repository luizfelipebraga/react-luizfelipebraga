import emailjs from '@emailjs/browser';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { MySituation } from '../Situation';
import { Box, Button, Container, Input, NameBox, Select, TextArea } from './styles';

import { FiRefreshCw } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [select, setSelect] = useState<string>('type');
  const [message, setMessage] = useState<string>('');
  const [captchaValue, setCaptchaValue] = useState<string>('');
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaValue(`${num1} + ${num2}`);
    setCaptchaAnswer((num1 + num2).toString());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (event.currentTarget instanceof HTMLFormElement) {
      const captchaValue = event.currentTarget.captcha.value;
      if (captchaAnswer !== captchaValue) {
        toast.error("Incorrect answer. Please try again.");
        generateCaptcha();
        return;
      }
    }

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      form.current as HTMLFormElement, {
      publicKey: import.meta.env.VITE_EMAILJS_USER_ID as string
    })
      .then(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setSelect('type');
        setMessage('');
        generateCaptcha();

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

        <form onSubmit={sendEmail} ref={form}>
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

          <div style={{
            margin: '15px 0',
            padding: '15px',
            border: '1px solid #ffffff',
            borderRadius: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <label htmlFor="captcha" style={{
                color: '#ffffff',
                fontSize: '0.95rem'
              }}>
                Please solve this to verify you're human:
              </label>
              <button
                type="button"
                onClick={generateCaptcha}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  padding: '5px'
                }}
                aria-label="Generate new captcha"
                title="Generate new captcha"
              >
                <FiRefreshCw style={{ marginRight: '5px' }} /> New question
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                padding: '8px 12px',
                borderRadius: '4px',
                color: '#fff',
                fontWeight: 'bold',
                letterSpacing: '1px',
                minWidth: '80px',
                textAlign: 'center'
              }}>
                {captchaValue} =
              </div>
              <Input
                required
                type="text"
                name="captcha"
                id="captcha"
                placeholder="Enter the answer"
                aria-label="CAPTCHA answer"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  backgroundColor: 'rgba(60, 60, 60, 0.5)',
                  color: '#ffffff',
                  padding: '10px',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  transition: 'border 0.3s ease'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #ffffff'}
                onBlur={(e) => e.target.style.border = '1px solid #444'}
              />
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#999',
              marginTop: '8px'
            }}>
              This helps us prevent automated spam submissions.
            </div>
          </div>

          <Button type="submit" value="Send" />
        </form>
      </Box>

    </Container>
  )
}
