import styled from "@emotion/styled";

import { BREAKPOINT_1, SIZE_1, SIZE_4 } from "~/web/constants/theme";

import NavigationBar from "./components/NavigationBar";

export default function Layout({ children }) {
  return (
    <Div>
      <Header>
        <NavigationBar />
      </Header>
      <Main>{children}</Main>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${SIZE_4};

  & > * + * {
    margin-left: ${SIZE_4};
  }

  @media only screen and (max-width: ${BREAKPOINT_1}) {
    & {
      flex-direction: column;
      padding: ${SIZE_1};
    }

    & > * + * {
      margin-left: 0;
      margin-top: ${SIZE_4};
    }
  }
`;

const Header = styled.header``;

const Main = styled.main`
  flex-grow: 1;
`;
