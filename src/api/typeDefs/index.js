import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    currentUser: User!
  }

  type Mutation {
    login(input: LoginInput!): LoginPayload!
    register(input: RegisterInput!): RegisterResult!
  }

  input LoginInput {
    emailOrUsername: String!
    password: String!
  }

  type LoginPayload {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    username: String!
    password: String!
  }

  type RegisterInput {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    username: String!
  }
`;

export default typeDefs;