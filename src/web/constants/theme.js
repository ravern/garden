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

export const SIZE_1 = "0.8rem";
export const SIZE_2 = "1.2rem";
export const SIZE_3 = "1.4rem";
export const SIZE_4 = "1.6rem";
export const SIZE_5 = "2.0rem";
export const SIZE_6 = "2.4rem";

export const BREAKPOINT_1 = "56rem";
