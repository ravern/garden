import { useMutation } from "@apollo/react-hooks";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";

import RegisterMutation from "~/graphql/RegisterMutation";
import transformFormError from "~/helpers/transformFormError";

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
      console.log(transformFormError(error));
      setError(transformFormError(error));
    }
  };

  console.log(errors.email?.message);

  return (
    <ModalContent as="form" onSubmit={onSubmit(handleSubmit)}>
      <ModalHeader>
        <Heading as="h1" size="md" m={0}>
          publish.garden
        </Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody as={Stack} spacing={2}>
        <FormControl isInvalid={!!errors.username}>
          <Input
            errorBorderColor="red.500"
            name="username"
            placeholder="Username"
            ref={register}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <Input
            errorBorderColor="red.500"
            name="email"
            placeholder="Email"
            ref={register}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <Input name="password" placeholder="Password" ref={register} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.confirmPassword}>
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            ref={register}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
      </ModalBody>
      <ModalFooter justifyContent="flex-start">
        <Button type="submit">Sign up</Button>
      </ModalFooter>
    </ModalContent>
  );
}
