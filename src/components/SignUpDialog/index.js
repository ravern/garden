/** @jsx jsx */

import NoSSR from "react-no-ssr";
import { Dialog, DialogBackdrop } from "reakit/Dialog";
import { jsx } from "theme-ui";

import SignUpForm from "./components/SignUpForm";

export default function SignUpDialog(props) {
  return (
    <NoSSR>
      <DialogBackdrop
        {...props}
        sx={{
          bg: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dialog {...props} className="boom" aria-label="Sign up or sign in">
          <SignUpForm />
        </Dialog>
      </DialogBackdrop>
    </NoSSR>
  );
}
