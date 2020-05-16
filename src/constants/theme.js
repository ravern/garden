const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
};

export const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Inter, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#06a",
    secondary: "#30c",
    lightGray: "#f6f6f6",
    darkGray: "#a2a2a2",
  },
  links: {
    nav: {
      textDecoration: "underline",
      color: "primary",
      fontSize: 2,
      fontWeight: "body",
      cursor: "pointer",
    },
  },
  buttons: {
    primary: {
      bg: "background",
      color: "text",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "darkGray",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 2,
      px: 2,
      py: 1,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};

export default base;
