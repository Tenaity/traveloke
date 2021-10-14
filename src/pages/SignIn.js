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
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useRef, useState, useContext } from "react";
import Testimonial from "../components/loginComponent/Testimonial";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import AppContext from "../components/AppContext";
import { useHistory } from "react-router";

const SignIn = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "https://pbl6-travelapp.herokuapp.com/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const { user, tokens } = response.data;
      const userName = user.name;
      localStorage.setItem("token", tokens.access.token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onClickReveal = () => {
    onToggle();
    const input = inputRef.current;
    if (input) {
      input.focus({ preventScroll: true });
      const length = input.value.length * 2;
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length);
      });
    }
  };

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
              <form onSubmit={onSubmitHandle}>
                <Stack spacing="4">
                  <FormControl id="email">
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={userInput.email}
                      onChange={onChangeHandle}
                      required
                    />
                  </FormControl>
                  <FormControl id="password">
                    <Flex justify="space-between">
                      <FormLabel>Password</FormLabel>
                      <Box
                        as="a"
                        color={mode("blue.600", "blue.200")}
                        fontWeight="semibold"
                        fontSize="sm"
                      >
                        Forgot Password?
                      </Box>
                    </Flex>
                    <InputGroup>
                      <InputRightElement>
                        <IconButton
                          bg="transparent !important"
                          variant="ghost"
                          aria-label={
                            isOpen ? "Mask password" : "Reveal password"
                          }
                          icon={isOpen ? <HiEyeOff /> : <HiEye />}
                          onClick={onClickReveal}
                        />
                      </InputRightElement>
                      <Input
                        name="password"
                        value={userInput.password}
                        onChange={onChangeHandle}
                        type={isOpen ? "text" : "password"}
                        required
                      />
                    </InputGroup>
                  </FormControl>
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
