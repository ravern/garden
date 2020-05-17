import { Flex } from "@chakra-ui/core";

import NavigationBar from "./components/NavigationBar";

export default function Layout({ children }) {
  return (
    <Flex direction="column" height="100vh">
      <NavigationBar />
      {children}
    </Flex>
  );
}
