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
  gap: 2rem;

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
  font-size: clamp(13px, 5vw, 16px);
  line-height: 30px;

  padding: 1rem;

  @media (max-width: 1024px) {
    background-color: #18181a;
    padding: 1.5rem;
  }
`;