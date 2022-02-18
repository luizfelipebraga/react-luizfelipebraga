import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;

  padding: 150px 0 50px 0;
  max-width: 1000px;

  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  /* box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-left: .4rem solid #ffb464;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
    >img {
      display: none;
    }
  }
`;

export const MyselfImg = styled.img`
  height: 22rem;
  object-fit: cover;
  border-radius: 8px;
`;

export const BoxIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 550px;

  /* font-size: 1rem; */
  font-size: clamp(13px, 4vw, 16px);
  line-height: 30px;

  padding: 1rem;
`;