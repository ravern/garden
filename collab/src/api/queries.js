import gql from "graphql-tag";

export const PageQuery = gql`
  query PageQuery($id: ID!) {
    page(id: $id) {
      id
      version
      content
    }
  }
`;
