import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;

    margin: 0 auto;
    max-width: 800px;
`;

export const GridProjects = styled.div`
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
`;

export const BoxProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`