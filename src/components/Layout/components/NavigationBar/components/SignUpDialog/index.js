import Dialog from "~/components/core/Dialog";

import SignUpForm from "./components/SignUpForm";

export default function SignUpDialog(props) {
  return (
    <Dialog {...props} aria-label="Sign up form">
      <SignUpForm />
    </Dialog>
  );
}
