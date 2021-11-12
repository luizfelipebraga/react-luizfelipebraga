import {
    ContainerCard,
    Title,
    Content,
    Url,
    BoxProject
} from './styles'

interface ICardProps {
    title: string;
    content: string;
    url: string;
    children?: React.ReactNode;
}

export function Card({ title, content, url, children }: ICardProps) {
    return (
        <div>
            <a href={url} target="_blank" rel="noreferrer">
                <ContainerCard>
                    <BoxProject>
                        <Title>{title}</Title>
                        <Content>{content}</Content>
                    </BoxProject>

                    <Url>
                        {children}
                    </Url>
                </ContainerCard>
            </a>
        </div>
    );
}