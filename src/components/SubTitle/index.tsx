import { Title } from './styles';

type SubTitleProps = {
    number: string;
    title: string;
}

export const SubTitle = ({ number, title }: SubTitleProps) => {
    return (
        <Title>
            <h2><span>{number}.</span>{title}</h2>
        </Title>
    );
}