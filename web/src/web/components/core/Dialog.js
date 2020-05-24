import { Dialog as ReachDialog } from "@reach/dialog";
import styled from "@xstyled/styled-components";
import { system } from "@xstyled/system";

// Reset Reach styles.
const Dialog = styled(ReachDialog)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  background: none;
  width: auto;

  ${system}
`;

export default Dialog;
