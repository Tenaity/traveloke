import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import DividerWithText from "../components/loginComponent/DividerWithText";
import SigupForm from "../components/loginComponent/SigupForm";
import Testimonial from "../components/loginComponent/Testimonial";
import { Link } from "react-router-dom";
const SignUp = () => {
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
                  Welcome to VieTravel
                </Heading>
                <Text
                  fontSize="lg"
                  color={mode("gray.600", "gray.400")}
                  fontWeight="medium"
                >
                  Enter your info to get started
                </Text>
              </Box>
              <Stack spacing="4">
                <Button
                  variant="outline"
                  leftIcon={<Box as={FaGoogle} color="red.500" />}
                >
                  Sign up with Google
                </Button>
                <Button
                  variant="outline"
                  leftIcon={
                    <Box
                      as={FaFacebook}
                      color={mode("facebook.500", "facebook.300")}
                    />
                  }
                >
                  Sign up with Facebook
                </Button>
              </Stack>
              <DividerWithText>or</DividerWithText>
              <SigupForm />
            </Box>

            <Text mt="8" align="center" fontWeight="medium">
              Already have an account?{" "}
              <Link to="/signin">
                <Box
                  as="a"
                  href="#"
                  color={mode("blue.600", "blue.200")}
                  display={{ base: "block", md: "inline-block" }}
                >
                  Log in to VieTravel
                </Box>
              </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SignUp;
