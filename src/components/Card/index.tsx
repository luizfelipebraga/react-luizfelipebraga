import {
    ContainerCard,
    Title,
    Content,
    Url
} from './styles'

interface ICardProps {
    title: string;
    content: string;
    url: string;
    children?: React.ReactNode;
}

export function Card({ title, content, url }:ICardProps) {
    return (
        <ContainerCard>
            <Title>{title}</Title>
            <Content>{content}</Content>

            <Url href={url}>

            </Url>
        </ContainerCard>
    );
}