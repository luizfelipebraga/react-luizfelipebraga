import { Button, Container } from "./styles";

type ProjectProps = {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function ProjectButtonComponent({ href, target, rel, children }: ProjectProps) {
  return (
    <Container>
      <Button href={href} target={target} rel="noreferrer">{children}</Button>
    </Container>
  )
}
