/** @jsx jsx */

import NextLink from "next/link";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { Box, Button, Heading, jsx, NavLink } from "theme-ui";

import Stack from "~/components/core/Stack";
import SignUpDialog from "~/components/SignUpDialog";

export default function NavigationBar() {
  const signUpDialog = useDialogState();

  return (
    <>
      <Stack
        p={2}
        sx={{
          borderBottom: "2px solid",
          borderBottomColor: "lightGray",
        }}
      >
        <Stack gap={2} align="center" sx={{ flexGrow: 1 }}>
          <Box>
            <NextLink href="/">
              <Heading as="h1" sx={{ fontSize: 3 }}>
                {"Ravern's Working Notes"}
              </Heading>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="/">
              <NavLink>About these pages</NavLink>
            </NextLink>
          </Box>
        </Stack>
        <Stack gap={2} align="center">
          <Box>
            <NextLink href="/">
              <NavLink>Settings</NavLink>
            </NextLink>
          </Box>
          <DialogDisclosure as={Button} {...signUpDialog}>
            Sign up
          </DialogDisclosure>
        </Stack>
      </Stack>
      <SignUpDialog {...signUpDialog} />
    </>
  );
}
