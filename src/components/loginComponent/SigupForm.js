import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import PasswordField from "./PasswordField";
const SigupForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // your submit logic here
      }}
    >
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel mb={1}>Name</FormLabel>
          <Input autoComplete="name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input type="email" autoComplete="email" />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </form>
  );
};

export default SigupForm;
