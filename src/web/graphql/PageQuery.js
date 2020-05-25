import gql from "graphql-tag";

const PageQuery = gql`
  query PageQuery($id: ID!) {
    page(id: $id) {
      id
      title
      content
    }
  }
`;

export default PageQuery;
