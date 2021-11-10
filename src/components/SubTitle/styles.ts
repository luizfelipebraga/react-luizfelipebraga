import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    margin: 10px 0 40px;

    h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    gap: 10px;
    font-size: 1.7rem;
    color: #f2f2f2;

    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0px;
      left: 15px;
      width: 650px;
      height: 1px;
      background-color: #686868;
    }

    span {
      color: #ffb464;
      font-size: 1.3rem;
    }
  }
`;