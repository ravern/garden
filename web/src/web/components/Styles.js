import { createGlobalStyle } from "@xstyled/styled-components";

export default createGlobalStyle`
  * {
    font-family: body;
    font-size: 3;
    box-sizing: border-box;

    &:focus {
      outline: 2px solid blue;
    }
  }

  h1, h2, h3 {
    margin: 0;
    font-weight: 600;
  }

  h1 {
    font-size: 5;
  }

  h2 {
    font-size: 4;
  }

  h3 {
    font-size: 3;
  }

  p {
    margin: 0;
  }

  a {
    color: blue;
  }

  article {
    h1, h2, h3, p {
      margin-top: 2;
    }
  }
`;
