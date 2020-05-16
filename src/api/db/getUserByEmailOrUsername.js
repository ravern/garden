import gql from "graphql-tag";

const GetUserByEmailOrUsernameQuery = gql`
  query GetUserByEmailOrUsername($emailOrUsername: String!) {
    queryUser(
      filter: {
        username: { eq: $emailOrUsername }
        or: { email: { eq: $emailOrUsername } }
      }
    ) {
      id
      username
      email
      password
    }
  }
`;

export default async function getUserByEmailOrUsername(
  client,
  emailOrUsername
) {
  const result = await client.query({
    query: GetUserByEmailOrUsernameQuery,
    variables: { emailOrUsername },
  });

  console.log(result.data.queryUser);
}
