import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";

import { PageQuery, PageUpdateMutation } from "./graphql";

const token = Buffer.from(`collab:${process.env.API_KEY}`).toString("base64");

const client = new ApolloClient({
  uri: `${process.env.API_URL}/api`,
  fetch,
  request: (operation) =>
    operation.setContext({
      headers: {
        authorization: `Basic ${token}`,
      },
    }),
});
client.defaultOptions = {
  query: {
    fetchPolicy: "network-only",
  },
};

export async function pageUpdate(pageID, version, content) {
  return client.mutate({
    mutation: PageUpdateMutation,
    variables: {
      input: { pageID, version, content },
    },
  });
}

export async function page(id) {
  const { data } = await client.query({
    query: PageQuery,
    variables: { id },
  });
  return data?.page;
}
