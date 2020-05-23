import Dialog from "~/components/core/Dialog";

import SignInForm from "./components/SignInForm";

export default function SignInDialog(props) {
  const { onDismiss } = props;

  return (
    <Dialog {...props} aria-label="Sign in form">
      <SignInForm onSuccess={onDismiss} />
    </Dialog>
  );
}
