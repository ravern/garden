import gql from "graphql-tag";

export const PageUpdateMutation = gql`
  mutation PageUpdateMutation($input: PageUpdateInput!) {
    pageUpdate(input: $input) {
      data {
        id
        title
        content
      }
      error {
        message
      }
    }
  }
`;

export const PageQuery = gql`
  query PageQuery($id: ID!) {
    page(id: $id) {
      id
      version
      content
    }
  }
`;
