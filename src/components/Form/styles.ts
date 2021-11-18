import styled from 'styled-components';

export const Container = styled.section`
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 450px;

    @media (max-width: 1024px) {
      margin: 0 auto;
    }

    @media (max-width: 360px) {}
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 16px;

  input {
    width: 50%;
  }
`;

export const Input = styled.input`
  margin-right: 0px !important;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const Select = styled.select`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;

  option {
    &::disabled {
      background: transparent;
    }
    padding: 1rem;
    background-color: transparent;
    margin-top: 1rem;
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;
`;

export const Button = styled.input`
  background-color: transparent;
  font-size: 1rem;
  padding: 1rem;

  color: #fff;
  border: 2px solid #f55f19;
  cursor: pointer;
`;