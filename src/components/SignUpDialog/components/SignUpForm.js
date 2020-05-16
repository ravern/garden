/** @jsx jsx */

import {
  unstable_Form as Form,
  unstable_FormInput as FormInput,
  unstable_FormSubmitButton as FormSubmitButton,
  unstable_useFormState as useFormState,
} from "reakit/Form";
import { Box, Button, Flex, Heading, Input, jsx, Link } from "theme-ui";

import { SITE_NAME } from "~/constants";

export default function SignUpForm() {
  const form = useFormState({
    values: { name: "" },
    onValidate: (values) => {
      if (!values.name) {
        const errors = {
          name: "How can we be friends without knowing your name?",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form as={Box} {...form} sx={{ bg: "white" }}>
      <Heading as="h1">{SITE_NAME}</Heading>
      <FormInput as={Input} {...form} name="username" placeholder="Username" />
      <FormInput as={Input} {...form} name="email" placeholder="Email" />
      <FormInput
        as={Input}
        {...form}
        type="password"
        name="password"
        placeholder="Password"
      />
      <FormInput
        as={Input}
        {...form}
        type="password"
        name="confirm_password"
        placeholder="Confirm password"
      />
      <Flex>
        <FormSubmitButton as={Button} {...form}>
          Submit
        </FormSubmitButton>
        <span>
          or{" "}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              console.log("working");
            }}
          >
            Sign In
          </Link>
        </span>
      </Flex>
    </Form>
  );
}
