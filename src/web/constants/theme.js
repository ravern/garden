import { rpxTransformers } from "@xstyled/system";

export default {
  fonts: {
    heading: "inherit",
    body: "Inter, sans-serif",
    mono: "monospace",
  },
  colors: {
    failure: "red",
  },
  transformers: {
    ...rpxTransformers,
  },
};
