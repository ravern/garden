import styled, { Box as XstyledBox, css } from "@xstyled/styled-components";

import ignoreStyledProps from "~/web/helpers/ignoreStyledProps";

const Box = ignoreStyledProps(XstyledBox, ["variant", "gap"]);

const Stack = styled(Box)`
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
