import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;

  margin: 0px auto;
  padding: 150px 0;
  max-width: 900px;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;
`;

export const MyselfImg = styled.img`
  height: 20rem;
  border-radius: 8px;
`;

export const AboutBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin: 10px 0px 40px;

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

export const BoxIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1rem;
  line-height: 30px;
`;