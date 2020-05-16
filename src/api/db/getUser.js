import gql from "graphql-tag";
import first from "lodash/first";
import isNil from "lodash/isNil";

const GetUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      password
    }
  }
`;

export default async function getUser(client, id) {
  const result = await client.query({
    query: GetUser,
    variables: { id },
  });

  if (isNil(result.data?.queryUser)) {
    throw new Error("could not fetch user");
  }

  return first(result.data.queryUser);
}
