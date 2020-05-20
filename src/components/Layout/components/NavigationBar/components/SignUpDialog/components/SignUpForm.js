import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";

import Stack from "~/components/core/Stack";
import RegisterMutation from "~/graphql/RegisterMutation";
import transformFormError from "~/helpers/transformFormError";

export default function SignUpForm() {
  const [signUp] = useMutation(RegisterMutation);

  const { register, handleSubmit: onSubmit, errors, setError } = useForm();

  const handleSubmit = async (values) => {
    console.log("submit");
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
      console.log(transformFormError(error));
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
      <button type="submit">Sign up</button>
    </Stack>
  );
}
