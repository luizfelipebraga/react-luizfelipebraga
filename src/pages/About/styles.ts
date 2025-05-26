import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 120px 0 80px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  gap: 3rem;
  background: rgba(30, 30, 30, 0.7);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-left: 0.4rem solid #ffb464;
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  padding: 0;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    
    >img {
      max-width: 300px;
      border-radius: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const MyselfImg = styled.img`
  width: 450px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BoxIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2.5rem 2.5rem 0;
  font-size: clamp(14px, 4vw, 16px);
  line-height: 1.8;
  
  h1 {
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 0.5rem;
    color: #ffb464;
  }
  
  strong {
    color: #ffb464;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`;

// Add a new component for skills section
export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const SkillBadge = styled.span`
  background: rgba(255, 180, 100, 0.2);
  color: #ffb464;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background: rgba(255, 180, 100, 0.3);
  }
`;