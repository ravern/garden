import { useQuery } from "@apollo/react-hooks";
import NextLink from "next/link";
import { useState } from "react";

import Stack from "~/components/core/Stack";
import CurrentUserQuery from "~/graphql/CurrentUserQuery";

import SignInDialog from "./components/SignInDialog";
import SignUpDialog from "./components/SignUpDialog";

export default function NavigationBar() {
  const { data } = useQuery(CurrentUserQuery);
  const currentUser = data?.currentUser;

  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState(false);
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);

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
          {currentUser && currentUser.username}
          {!currentUser && (
            <>
              <button onClick={() => setIsSignInDialogOpen(true)}>
                Sign in
              </button>
              <button onClick={() => setIsSignUpDialogOpen(true)}>
                Sign up
              </button>
            </>
          )}
        </Stack>
      </Stack>
      {isSignUpDialogOpen && (
        <SignUpDialog onDismiss={() => setIsSignUpDialogOpen(false)} />
      )}
      {isSignInDialogOpen && (
        <SignInDialog onDismiss={() => setIsSignInDialogOpen(false)} />
      )}
    </>
  );
}
