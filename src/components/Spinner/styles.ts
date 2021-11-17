import styled from 'styled-components';

export const Container = styled.section`
  animation: rotate 0.8s infinite linear;
  position: relative;
  display: block;
  width: 142px;
  height: 142px;
`;

export const Spinner = styled.div`
  animation: rotate 3s infinite linear;
  transform-origin: 50% 100% 0;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  border: solid 12px transparent;
  border-bottom: none;

  color: #f00;
  -webkit-animation: color-bubble 2s linear 0s infinite;
  animation: color-bubble 2s linear 0s infinite;

  &:nth-child(1) {
    animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
    width: 42px;
    height: 22px;
    margin-top: -22px;
    margin-left: -22px;
    border-color: #c27f41;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }

  &:nth-child(2) {
    animation-timing-function: cubic-bezier(0.09, 0.4, 0.14, 0.03);
    width: 58px;
    height: 29px;
    margin-top: -29px;
    margin-left: -29px;
    border-color: #f6a04f;
    border-top-left-radius: 42px;
    border-top-right-radius: 42px;
  }

  &:nth-child(3) {

    animation-timing-function: cubic-bezier(0.09, 0.6, 0.16, 0.03);
    width: 72px;
    height: 36px;
    margin-top: -36px;
    margin-left: -36px;
    border-top-left-radius: 48px;
    border-top-right-radius: 48px;
    border-color: #f59f4f;
  }

  @keyframes rotate {
    to { transform: rotate(360deg); }
  }
`;

