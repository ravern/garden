/** @jsx jsx */

import NextLink from "next/link";
import { Flex, Heading, jsx, NavLink } from "theme-ui";

export default function NavigationBar() {
  return (
    <Flex sx={{ alignItems: "center" }}>
      <NextLink href="/">
        <NavLink>
          <Heading as="h1">{"Ravern's Working Notes"}</Heading>
        </NavLink>
      </NextLink>
      <NextLink href="/">
        <NavLink>About these pages</NavLink>
      </NextLink>
    </Flex>
  );
}
