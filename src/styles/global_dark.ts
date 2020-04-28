import { createGlobalStyle, css } from 'styled-components';

import githubBackgroundDarkMode from '../assets/github-background_dark.svg';

interface DarkProps {
  isDark: boolean;
}

export default createGlobalStyle<DarkProps>`
  body{
    ${(props) =>
      props.isDark &&
      css`
        background: #0a0a0f url(${githubBackgroundDarkMode}) no-repeat 70% top;
      `}
  }
`;
