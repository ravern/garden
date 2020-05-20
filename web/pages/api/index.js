import { ApolloServer } from "apollo-server-micro";
import connect from "connect";
import cors from "cors";

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

const app = connect();

app.use(cors());
app.use(server.createHandler({ path: "/api" }));

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
