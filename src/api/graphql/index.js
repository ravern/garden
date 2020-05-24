import { ApolloServer } from "apollo-server-express";

import getUser from "./helpers/getUser";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    const currentUser = await getUser(ctx);
    return { db: ctx.req.app.locals.db, currentUser };
  },
});

export default server;
