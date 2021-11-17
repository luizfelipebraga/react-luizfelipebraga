import styled from 'styled-components';

export const ContainerCard = styled.a`
    display: flex;
    justify-content:space-between;
    flex-direction: column;

    max-width: 500px;
    min-height: 300px;

    border-radius: 2px;

    &:hover{
        transform: translateY(-3px);

        h2 {
            color: #ffb464;
        }
    }

    padding: 2rem 1.75rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #18181a;
    box-shadow: 0 10px 30px -15px #0f0f10e8;

`;

export const BoxProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    color: #FFF;
`;

export const Content = styled.span`
    color: #c7c3c3;
    font-size: clamp(14px, 2vw, 10px);
    line-height: 25px;
`;

export const Url = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: clamp(13px, 2vw, 10px);
    cursor: pointer;
    list-style: none;
    text-decoration: none;

    a {
        span {
            &:hover {
            color: #e18451;
            }
        }
    }
`;