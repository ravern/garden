import { Box, Input } from "@chakra-ui/core";

import Editor from "./components/Editor";

export default function Page() {
  return (
    <Box p={3} minW="80ch">
      <Input placeholder="Title" />
      <Editor />
    </Box>
  );
}
