import gql from "graphql-tag";

const LoginMutation = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      data {
        token
        user {
          id
          username
          email
        }
      }
      error {
        message
      }
    }
  }
`;

export default LoginMutation;
