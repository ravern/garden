import styled, { Box, css } from "@xstyled/styled-components";

import ignoreStyledProps from "~/web/helpers/ignoreStyledProps";

const Stack = styled(ignoreStyledProps(Box, ["variant", "gap"]))`
  ${({ variant, gap }) => {
    if (variant === "column") {
      return css`
        display: flex;
        flex-direction: column;

        & > * + * {
          margin-top: ${gap};
        }
      `;
    } else {
      return css`
        display: flex;
        flex-direction: row;

        & > * + * {
          margin-left: ${gap};
        }
      `;
    }
  }}
`;

export default Stack;
