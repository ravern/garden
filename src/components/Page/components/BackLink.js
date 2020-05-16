/** @jsx jsx */

import { Box, Flex, Heading, jsx, Text } from "theme-ui";

export default function BackLink() {
  return (
    <Flex
      p={2}
      sx={{
        flexDirection: "column",
        opacity: 0.5,
        ":hover": { bg: "lightGray" },
      }}
    >
      <Heading as="h4">Daily working log</Heading>
      <Text>
        Blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah
      </Text>
    </Flex>
  );
}
