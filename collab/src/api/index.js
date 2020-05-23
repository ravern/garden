import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";

import { PageCreateMutation } from "./mutations";

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

export async function pageCreate(gardenID, title) {
  return client.mutate({
    mutation: PageCreateMutation,
    variables: {
      input: { gardenID, title },
    },
  });
}

export async function pageUpdate(pageID, content) {}
