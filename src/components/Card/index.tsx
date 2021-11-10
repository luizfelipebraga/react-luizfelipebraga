import {
    ContainerCard,
    Title,
    Content,
    Url
} from './styles'

import { Link } from 'react-router-dom';

interface ICardProps {
    title: string;
    content: string;
    url: string;
    children?: React.ReactNode;
}

export function Card({ title, content, url }: ICardProps) {
    return (
        <Link to={url}>
            <ContainerCard>
                <Title>{title}</Title>
                <Content>{content}</Content>

                <Url>
                    <span>github</span>
                    <span>React</span>
                    <span>github</span>
                </Url>
            </ContainerCard>
        </Link>
    );
}