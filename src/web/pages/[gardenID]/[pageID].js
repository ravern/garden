import { useQuery } from "@apollo/react-hooks";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

import Page from "~/web/components/Page";
import Editor from "~/web/components/Page/components/Editor";
import PageQuery from "~/web/graphql/PageQuery";

export default function PagePage() {
  const {
    query: { pageID },
  } = useRouter();

  const [isEditing, setIsEditing] = useState();

  const { data } = useQuery(PageQuery, { variables: { id: pageID } });
  const page = data?.page;

  return (
    <Div>
      {!isEditing && page && (
        <Page page={page} onClick={() => setIsEditing(true)} />
      )}
      {isEditing && <Editor />}
    </Div>
  );
}

const Div = styled.div`
  width: 52rem;
  max-width: 100%;
  margin: auto;
`;
