import styled, { css } from "@xstyled/styled-components";

const Stack = styled.div`
  ${({ variant, align, justify, gap }) => {
    if (variant === "column") {
      return css`
        flex-direction: column;
        justify-content: ${justify};
        align-items: ${align};

        & > * + * {
          margin-top: ${gap};
        }
      `;
    } else {
      return css`
        flex-direction: row;
        justify-content: ${justify};
        align-items: ${align};

        & > * + * {
          margin-left: ${gap};
        }
      `;
    }
  }}
`;

export default Stack;
