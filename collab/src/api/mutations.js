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
