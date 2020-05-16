import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import mapValues from "lodash/mapValues";

import getUser from "./getUser";
import getUserByEmailOrUsername from "./getUserByEmailOrUsername";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "http://localhost:8086/graphql",
});

const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

const bind = (fnMap) =>
  mapValues(fnMap, (fn) => (...args) => fn(client, ...args));

export default bind({
  getUserByEmailOrUsername,
  getUser,
});
