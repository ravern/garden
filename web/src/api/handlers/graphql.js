import { ApolloServer } from "apollo-server-micro";

import db from "~/api/db";
import getCollabServer from "~/api/helpers/getCollabServer";
import getUser from "~/api/helpers/getUser";
import resolvers from "~/api/resolvers";
import typeDefs from "~/api/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    const currentUser = await getUser(ctx);
    const currentCollabServer = await getCollabServer(ctx);
    return { db, currentUser, currentCollabServer };
  },
});

const graphql = server.createHandler({ path: "/api/graphql" });

export default graphql;
