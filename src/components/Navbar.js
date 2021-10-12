import React from "react";
import {
  HStack,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
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
const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");

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
              <Link to="/">
                <Heading as="a">GoGo</Heading>
              </Link>
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
                  bg: { bg },
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

              <Button
                variant="ghost"
                scale="1"
                transform="auto"
                _hover={{
                  bg: { bg },
                  color: "blue.500",
                  scale: "1.2",
                }}
              >
                <Link to="/signin">Sign in</Link>
              </Button>
              <Button
                color={useColorModeValue("white")}
                _focus={{ boxShadow: "none" }}
                bg={"blue.500"}
                _hover={{ bg: useColorModeValue("blue.300", "blue.500") }}
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
