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
  width: 52rem;
  max-width: 100%;
`;
