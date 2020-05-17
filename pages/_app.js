import { CSSReset } from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import Head from "next/head";

import Layout from "~/components/Layout";
import theme from "~/constants/theme";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html {
              // font-size: 62.5%;
            }
          `}
        />
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
