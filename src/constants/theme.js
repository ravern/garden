import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: `Inter,${theme.fonts.body}`,
    heading: `Inter,${theme.fonts.heading}`,
  },
  colors: {
    ...theme.colors,
    primary: theme.colors.blue[600],
  },
};
