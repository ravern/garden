/** @jsx jsx */

import NextLink from "next/link";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { Button, Flex, Heading, jsx, NavLink } from "theme-ui";

import SignUpDialog from "~/components/SignUpDialog";

export default function NavigationBar() {
  const signUpDialog = useDialogState();

  return (
    <>
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
          <DialogDisclosure as={Button} {...signUpDialog}>
            Sign up
          </DialogDisclosure>
        </Flex>
      </Flex>
      <SignUpDialog {...signUpDialog} />
    </>
  );
}
