/** @jsx jsx */

import NextLink from "next/link";
import { Button, Flex, Heading, jsx, NavLink } from "theme-ui";

export default function NavigationBar() {
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid",
        borderBottomColor: "muted",
      }}
    >
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
      <Flex sx={{ alignItems: "center" }}>
        <NextLink href="/">
          <NavLink>Settings</NavLink>
        </NextLink>
        <Button>Sign up</Button>
      </Flex>
    </Flex>
  );
}
