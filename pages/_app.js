import Head from "next/head";
import { ThemeProvider } from "theme-ui";

import Layout from "~/components/Layout";
import theme from "~/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
