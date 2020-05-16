import { Flex, Heading, Text } from "theme-ui";

import Page from "~/components/Page";

export default function Home() {
  return (
    <Flex sx={{ flexDirection: "row", overflowX: "scroll", flexGrow: "1" }}>
      <Page />
      <Page />
      <Page />
    </Flex>
  );
}
