import "prosemirror-view/style/prosemirror.css";
import "@reach/dialog/styles.css";

import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@xstyled/styled-components";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, concat } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import Layout from "~/components/Layout";
import Styles from "~/components/Styles";
import { LOCAL_STORAGE_KEY_TOKEN } from "~/constants";
import theme from "~/constants/theme";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "/api/graphql",
  fetch,
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Styles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
