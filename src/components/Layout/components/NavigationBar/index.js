import { Button, Heading, Link, Stack, useDisclosure } from "@chakra-ui/core";
import NextLink from "next/link";

import SignUpModal from "./components/SignUpModal";

export default function NavigationBar() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Stack p={2} direction="row">
        <Stack
          spacing={2}
          align="center"
          direction="row"
          flexGrow="1"
          shouldWrapChildren
        >
          <NextLink href="/">
            <Heading as="h1" m={0} size="md">
              {"Ravern's Working Notes"}
            </Heading>
          </NextLink>
          <NextLink href="/">
            <Link textDecor="underline" color="primary">
              About these pages
            </Link>
          </NextLink>
        </Stack>
        <Stack spacing={2} align="center" direction="row" shouldWrapChildren>
          <NextLink href="/">
            <Link textDecor="underline" color="primary">
              Settings
            </Link>
          </NextLink>
          <Button onClick={onOpen}>Sign up</Button>
        </Stack>
      </Stack>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
