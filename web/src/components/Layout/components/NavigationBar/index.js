import NextLink from "next/link";
import { useState } from "react";

import Stack from "~/components/core/Stack";

import SignUpDialog from "./components/SignUpDialog";

export default function NavigationBar() {
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState(false);

  return (
    <>
      <Stack gap={2}>
        <Stack gap={2} alignItems="center" flex={1}>
          <NextLink href="/">
            <h1>{"Ravern's Working Notes"}</h1>
          </NextLink>
          <NextLink href="/">
            <a>About these pages</a>
          </NextLink>
        </Stack>
        <Stack gap={2} alignItems="center">
          <NextLink href="/">
            <a>Settings</a>
          </NextLink>
          <button onClick={() => setIsSignUpDialogOpen(true)}>Sign up</button>
        </Stack>
      </Stack>
      {isSignUpDialogOpen && (
        <SignUpDialog onDismiss={() => setIsSignUpDialogOpen(false)} />
      )}
    </>
  );
}
