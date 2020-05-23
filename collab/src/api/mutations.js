import gql from "graphql-tag";

export const PageCreateMutation = gql`
  mutation PageCreateMutation($input: PageCreateInput!) {
    pageCreate(input: $input) {
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

// export const PageUpdateMutation = gql``;
