import { useMutation } from "@apollo/react-hooks";
import { Box } from "@xstyled/styled-components";
import { useForm } from "react-hook-form";

import Stack from "~/web/components/core/Stack";
import RegisterMutation from "~/web/graphql/RegisterMutation";
import transformFormError from "~/web/helpers/transformFormError";

export default function SignUpForm() {
  const [signUp] = useMutation(RegisterMutation);

  const { register, handleSubmit: onSubmit, errors, setError } = useForm();

  const handleSubmit = async (values) => {
    const input = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    const {
      data: {
        register: { error },
      },
    } = await signUp({ variables: { input } });
    if (error) {
      setError(transformFormError(error));
    }
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
      {errors.message && <Box color="failure">{errors.message}</Box>}
      <input name="username" placeholder="Username" ref={register} />
      <input name="email" placeholder="Email" ref={register} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        ref={register}
      />
      <Stack variant="row" gap={2}>
        <button type="submit">Sign up</button>
      </Stack>
    </Stack>
  );
}
