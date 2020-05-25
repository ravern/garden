import styled from "@xstyled/styled-components";

import Editor from "./components/Editor";

export default function Page() {
  return (
    <Div>
      <Editor />
    </Div>
  );
}

const Div = styled.div`
  max-width: 52rem;
`;
