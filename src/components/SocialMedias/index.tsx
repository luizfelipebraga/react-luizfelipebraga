import {
  Container,
  Ul
} from './styles';

import githubLogo from '../../svgs/github2.svg';
import linkedinLogo from '../../svgs/linkedin-white.svg';
import gmailLogo from '../../svgs/logo-gmail.svg';

export function SocialMediaSideBar() {
  return (
    <Container>
      <Ul>
        <li>
          <a href="https://github.com/luizfelipebraga" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              /></svg>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/luizfelipe-braga/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </li>

        <li>
          <a href="mailto:luizfelipebragaa@gmail.com" target="_blank" rel="noreferrer">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30">
              <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 
                    25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 
                    5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 
                    L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z" /></svg>
          </a>
        </li>

      </Ul>
    </Container>
  )
}

