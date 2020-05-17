import gql from "graphql-tag";
import first from "lodash/first";
import isNil from "lodash/isNil";

const AddUser = gql`
  query AddUser($user: UserRef!) {
    addUser(input: [$user]) {
      user {
        id
        username
        email
        password
      }
    }
  }
`;

export default async function getUser(client, id) {
  const result = await client.query({
    mutation: AddUser,
    variables: { id },
  });

  if (isNil(result.data?.queryUser)) {
    throw new Error("could not fetch user");
  }

  return first(result.data.queryUser);
}
