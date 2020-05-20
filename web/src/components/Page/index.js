import styled from "@xstyled/styled-components";

import Stack from "~/components/core/Stack";

import Editor from "./components/Editor";

export default function Page() {
  return (
    <Stack p={3} width="80ch" variant="column" gap={2}>
      <Input placeholder="Title" />
      <Editor />
    </Stack>
  );
}

const Input = styled.input`
  border: none;
  font-weight: 600;
  font-size: 6;
`;
