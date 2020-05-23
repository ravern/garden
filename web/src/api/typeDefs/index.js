import gql from "graphql-tag";

const typeDefs = gql`
  scalar JSON

  type Query {
    currentUser: User!
    page(id: ID!): Page
  }

  type Mutation {
    login(input: LoginInput!): LoginResult!
    register(input: RegisterInput!): RegisterResult!
    pageCreate(input: PageCreateInput!): PageCreateResult!
    pageUpdate(input: PageUpdateInput!): PageUpdateResult!
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
    message: String!
    email: String
    username: String
    password: String
  }

  input PageCreateInput {
    gardenID: ID!
    title: String!
  }

  type PageCreateResult {
    data: Page
    error: Error
  }

  input PageUpdateInput {
    pageID: ID!
    content: JSON!
  }

  type PageUpdateResult {
    data: Page
    error: Error
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
    version: Int!
    content: JSON!
    garden: Garden!
  }
`;

export default typeDefs;
