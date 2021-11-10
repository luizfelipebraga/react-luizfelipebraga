import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    justify-content:space-between;
    flex-direction: column;

    max-width: 500px;
    height: 250px;

    border-radius: 8px;

    &:hover{
        transform: translateY(-3px);
    }

    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    background: #252525;

`;

export const Title = styled.h2`
    color: #FFF;
`;

export const Content = styled.span`
    color: #f9f9f9;
    background-color: #252525;
    font-size: .9rem;

    max-width: 600px;

`;

export const Url = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
`;