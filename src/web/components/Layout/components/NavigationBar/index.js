import styled from "@emotion/styled";
import NextLink from "next/link";

import { BREAKPOINT_1, SIZE_2 } from "~/web/constants/theme";

export default function NavigationBar() {
  return (
    <Nav>
      <NextLink href="/">
        <a>{"John's Working Notes"}</a>
      </NextLink>
      <NextLink href="/">
        <a>About these pages</a>
      </NextLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${SIZE_2};
  }

  @media only screen and (max-width: ${BREAKPOINT_1}) {
    & {
      flex-direction: row;
    }

    & > * + * {
      margin-top: 0;
      margin-left: ${SIZE_2};
    }
  }
`;
