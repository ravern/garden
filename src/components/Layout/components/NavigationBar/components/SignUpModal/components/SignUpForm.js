import {
  Button,
  FormControl,
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

export default function SignUpForm() {
  const { register, handleSubmit: onSubmit, errors } = useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <ModalContent as="form" onSubmit={onSubmit(handleSubmit)}>
      <ModalHeader>
        <Heading as="h1" size="md" m={0}>
          publish.garden
        </Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody as={Stack} spacing={2}>
        <FormControl isInvalid={errors.username}>
          <Input name="username" placeholder="Username" ref={register} />
        </FormControl>
        <FormControl isInvalid={errors.username}>
          <Input name="email" placeholder="Email" ref={register} />
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <Input name="password" placeholder="Password" ref={register} />
        </FormControl>
        <FormControl isInvalid={errors.confirmPassword}>
          <Input
            name="confirm_password"
            placeholder="Confirm Password"
            ref={register}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter justifyContent="flex-start">
        <Button type="submit">Sign up</Button>
      </ModalFooter>
    </ModalContent>
  );
}
