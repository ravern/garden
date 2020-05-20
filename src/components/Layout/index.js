import Stack from "~/components/core/Stack";

import NavigationBar from "./components/NavigationBar";

export default function Layout({ children }) {
  return (
    <Stack variant="column" gap={2}>
      <NavigationBar />
      {children}
    </Stack>
  );
}
