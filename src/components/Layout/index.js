import { Flex } from "theme-ui";

import NavigationBar from "./components/NavigationBar";

export default function Layout({ children }) {
  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      <NavigationBar />
      {children}
    </Flex>
  );
}
