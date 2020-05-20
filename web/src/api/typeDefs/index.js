import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    currentUser: User!
  }

  type Mutation {
    login(input: LoginInput!): LoginResult!
    register(input: RegisterInput!): RegisterResult!
  }

  type Error {
    message: String!
  }

  input LoginInput {
    emailOrUsername: String!
    password: String!
  }

  type LoginResult {
    data: LoginPayload
    error: Error
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

  type RegisterResult {
    data: RegisterPayload
    error: RegisterError
  }

  type RegisterPayload {
    token: String!
    user: User!
  }

  type RegisterError {
    email: String
    username: String
    password: String
  }

  type User {
    id: ID!
    email: String!
    username: String!
    userGardens: [UserGarden!]!
  }

  type UserGarden {
    id: ID!
    user: User!
    garden: Garden!
  }

  type Garden {
    id: ID!
    name: String!
    pages: [Page!]!
    userGardens: [UserGarden!]!
  }

  type Page {
    id: ID!
    title: String!
    garden: Garden!
  }
`;

export default typeDefs;
