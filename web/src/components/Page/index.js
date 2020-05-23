import styled from "@xstyled/styled-components";

import Stack from "~/components/core/Stack";

import Editor from "./components/Editor";

export default function Page() {
  return (
    <Stack p={3} width="80ch" variant="column" gap={2}>
      <Editor />
    </Stack>
  );
}
