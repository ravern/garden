import JSON from "graphql-type-json";

import Garden from "./Garden";
import Mutation from "./Mutation";
import Query from "./Query";
import User from "./User";
import UserGarden from "./UserGarden";

const resolvers = {
  Query,
  Mutation,
  User,
  Garden,
  UserGarden,
  JSON,
};

export default resolvers;
