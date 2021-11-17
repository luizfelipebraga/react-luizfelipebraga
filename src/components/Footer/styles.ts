import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 50px 0 0 0;
`;

export const Img = styled.img`
  height: 5rem;
  object-fit: cover;
`;

export const SpanCreatedBy = styled.span`
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color:#ffb464;
  }
`;