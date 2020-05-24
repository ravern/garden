import { ApolloServer } from "apollo-server-micro";

import db from "~/api/db";
import getUser from "~/api/helpers/getUser";
import resolvers from "~/api/resolvers";
import typeDefs from "~/api/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    const currentUser = await getUser(ctx);
    return { db, currentUser };
  },
});

const graphql = server.createHandler({ path: "/api/graphql" });

export default graphql;
