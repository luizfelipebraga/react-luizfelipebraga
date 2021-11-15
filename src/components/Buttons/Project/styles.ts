import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`;

export const Button = styled.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
      &:before {
          background: #f55f19;
          width: 100%;
      }
  }

  &:before {
      width: 0;
      height: 100%;

      content: "";
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      z-index: -1;
      transition: 0.7s ease;
    }
`;