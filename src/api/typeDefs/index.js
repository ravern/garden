import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    test: Boolean
  }

  type Mutation {
    test: Boolean
  }
`;

export default typeDefs;
