import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import Testimonial from "../components/loginComponent/Testimonial";
import PasswordField from "../components/loginComponent/PasswordField";
const SignIn = () => {
  return (
    <Box minH="100vh" bg={{ md: mode("gray.100", "inherit") }}>
      <Box
        maxW="6xl"
        mx="auto"
        py={{ base: "10", md: "20" }}
        px={{ base: "4", md: "10" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="14">
          <Flex
            direction="column"
            py="24"
            display={{ base: "none", lg: "flex" }}
          >
            <Testimonial />
            <SimpleGrid
              columns={3}
              spacing="10"
              paddingStart="12"
              alignItems="center"
              color="gray.400"
            ></SimpleGrid>
          </Flex>
          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg={{ md: mode("white", "gray.700") }}
              rounded={{ md: "2xl" }}
              p={{ base: "4", md: "12" }}
              borderWidth={{ md: "1px" }}
              borderColor={mode("gray.200", "transparent")}
              shadow={{ md: "lg" }}
            >
              <Box mb="8" textAlign={{ base: "center", md: "start" }}>
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Chào mừng bạn trở lại với VieTravel
                </Heading>
                <Text
                  fontSize="lg"
                  color={mode("gray.600", "gray.400")}
                  fontWeight="medium"
                >
                  Đặt chỗ ngay thôi nào !
                </Text>
              </Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Stack spacing="4">
                  <FormControl id="email">
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input type="email" autoComplete="email" />
                  </FormControl>
                  <PasswordField />
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    fontSize="md"
                  >
                    Log In
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SignIn;
