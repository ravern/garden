import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";

import { PageUpdateMutation } from "./mutations";
import { PageQuery } from "./queries";

const token = Buffer.from(`collab:${process.env.API_KEY}`).toString("base64");

console.log(process.env.API_URL);

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

export async function pageUpdate(pageID, content) {
  return client.mutate({
    mutation: PageUpdateMutation,
    variables: {
      input: { pageID, content },
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
