import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { Box } from "@xstyled/styled-components";
import { useForm } from "react-hook-form";

import Stack from "~/components/core/Stack";
import LoginMutation from "~/graphql/LoginMutation";
import saveTokenAndRefetchCurrentUser from "~/helpers/saveTokenAndRefetchCurrentUser";
import transformFormError from "~/helpers/transformFormError";

export default function SignInForm({ onSuccess }) {
  const apolloClient = useApolloClient();

  const [signIn] = useMutation(LoginMutation);

  const { register, handleSubmit: onSubmit, errors, setError } = useForm();

  const handleSubmit = async (values) => {
    const input = {
      emailOrUsername: values.emailOrUsername,
      password: values.password,
    };
    const {
      data: {
        login: { data, error },
      },
    } = await signIn({ variables: { input } });
    if (error) {
      setError(transformFormError(error));
      return;
    }
    saveTokenAndRefetchCurrentUser(apolloClient, data.token);
    onSuccess();
  };

  return (
    <Stack
      forwardedAs="form"
      variant="column"
      gap={2}
      p={2}
      bg="white"
      alignItems="flex-start"
      onSubmit={onSubmit(handleSubmit)}
    >
      <h1>publish.garden</h1>
      {errors.message && <Box color="failure">{errors.message.message}</Box>}
      <input
        name="emailOrUsername"
        placeholder="Email or username"
        ref={register}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      />
      <Stack variant="row" gap={2}>
        <button type="submit">Sign in</button>
      </Stack>
    </Stack>
  );
}
