import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const Global = createGlobalStyle`
  :root {
    ${colors}
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--primary-background);
    width: 100%;
    height: 100%;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 40px;
  }

  h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
  }

`;

export default Global;
