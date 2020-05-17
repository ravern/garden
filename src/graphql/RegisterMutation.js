import gql from "graphql-tag";

const RegisterMutation = gql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      data {
        token
        user {
          id
          username
          email
        }
      }
      error {
        email
        username
        password
      }
    }
  }
`;

export default RegisterMutation;
