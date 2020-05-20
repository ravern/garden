import NextLink from "next/link";

import Stack from "~/components/core/Stack";

import SignUpModal from "./components/SignUpModal";

export default function NavigationBar() {
  return (
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
        <button>Sign up</button>
      </Stack>
    </Stack>
  );
}
