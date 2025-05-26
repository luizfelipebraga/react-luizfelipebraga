import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    width: 100%;

    margin: 0 auto;
    padding: 100px 0 50px 0;

    max-width: 1000px;

    @media (max-width: 1024px) {
        padding-block: 0;
    }
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