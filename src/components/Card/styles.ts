import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    justify-content:space-between;
    flex-direction: column;

    max-width: 500px;
    height: 250px;

    border-radius: 8px;

`;

export const Title = styled.h2`
    color: #FFF;
`;

export const Content = styled.span`
    color: #f9f9f9;
    background-color: #252525;
    font-size: .9rem;
    padding: 1rem 2rem;

    max-width: 500px;

`;

export const Url = styled.a`
cursor: pointer;
    list-style: none;
    text-decoration: none;
`;