/** @jsx jsx */

import { useState } from "react";
import { Box, Grid, Input, jsx } from "theme-ui";

import BackLink from "./components/BackLink";
import Editor from "./components/Editor";

const initialValue = [
  {
    children: [
      { text: "This is editable plain text, just like a <textarea>!" },
    ],
  },
];

export default function Page() {
  const [value, setValue] = useState(initialValue);

  return (
    <Box
      p={3}
      sx={{
        minWidth: ["80ch"],
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <Input placeholder="Title" />
      <Editor value={value} onChange={setValue} />
      <Grid gap={2} columns={2}>
        <BackLink />
        <BackLink />
      </Grid>
    </Box>
  );
}
