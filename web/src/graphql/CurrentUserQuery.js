import gql from "graphql-tag";

const CurrentUserQuery = gql`
  query CurrentUserQuery {
    currentUser {
      id
      username
    }
  }
`;

export default CurrentUserQuery;
