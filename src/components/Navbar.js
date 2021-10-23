import React, { useContext } from "react";
import {
  HStack,
  Box,
  Flex,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import AppContext from "./AppContext";
import axios from "axios";
import { useHistory } from "react-router";
const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();

  const user = state.user;
  console.log(user);
  const signOut = () => {
    const token = localStorage.getItem("token");
    const option = {
      method: "post",
      url: "https://pbl6-travelapp.herokuapp.com/auth/logout",
      data: { refreshToken: { token } },
    };
    axios(option);
    localStorage.removeItem("token");
    dispatch({ type: "CURRENT_USER", payload: null });
    history.push("/");
  };
  return (
    <Box
      bg="white"
      borderTop="5px solid"
      borderTopColor="blue.500"
      pos="sticky"
      top="0"
      boxShadow="md"
      zIndex="sticky"
    >
      <Flex h="4.5rem" maxW="7xl" mx="auto">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex>
            <HStack spacing="5">
              <Heading as="a">
                <Link to="/">GoGo</Link>
              </Heading>
              <Box w="400px" mt="2">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    _focus={{ boxShadow: "none" }}
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Search"
                    borderColor="gray.800"
                  />
                </InputGroup>
              </Box>
            </HStack>
          </Flex>

          <Box>
            <HStack spacing="5">
              <Button
                variant="ghost"
                scale="1"
                transform="auto"
                _hover={{
                  color: "blue.500",
                  scale: "1.2",
                }}
              >
                <Link to="/booking">Booking</Link>
              </Button>
              <Menu>
                <MenuButton
                  bg="white"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem>Hotel</MenuItem>
                  <MenuItem>Restaurant</MenuItem>
                  <MenuItem>Plane</MenuItem>
                  <MenuItem>Train</MenuItem>
                  <MenuItem>Car</MenuItem>
                </MenuList>
              </Menu>
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    color="orange.500"
                    scale="1"
                    transform="auto"
                    _hover={{
                      scale: "1.2",
                    }}
                  >
                    <Link to="/">{user.userName}</Link>
                  </Button>
                  <Button
                    color="white"
                    _focus={{ boxShadow: "none" }}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.300" }}
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    scale="1"
                    transform="auto"
                    _hover={{
                      color: "blue.500",
                      scale: "1.2",
                    }}
                  >
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button
                    color="white"
                    _focus={{ boxShadow: "none" }}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.300" }}
                  >
                    <Link to="/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
