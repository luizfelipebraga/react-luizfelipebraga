import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  span {
    font-size: clamp(2rem, 5vw, 4.5rem);

    &:not(:first-child) {
      color: #fff;
    }

    &:first-child {
      letter-spacing: .6rem;
      font-size: clamp(1.5rem, 5vw, 2.7rem);
    }
  }
`;