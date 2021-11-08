import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    padding: 1rem;

    max-width: 250px;
    height: 250px;

    border-radius: 8px;

    background-color: #252525;
`;

export const Title = styled.h2`
    color: #FFF;
    text-align: center;
`;

export const Content = styled.span`
    color: #f9f9f9;
`;

export const Url = styled.a`
cursor: pointer;
    list-style: none;
    text-decoration: none;
`;