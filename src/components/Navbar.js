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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  // const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="md"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
        _hover={{ bg: { bg }, color: "blue.500" }}
        _focus={{ boxShadow: "none" }}
      />
      <Button
        w="100%"
        variant="ghost"
        _hover={{ bg: { bg }, color: "blue.500" }}
        _focus={{ boxShadow: "none" }}
      >
        About
      </Button>
      <Button
        w="100%"
        variant="ghost"
        _hover={{ bg: { bg }, color: "blue.500" }}
        _focus={{ boxShadow: "none" }}
      >
        Articles
      </Button>
      <Button
        w="100%"
        variant="ghost"
        _hover={{ bg: { bg }, color: "blue.500" }}
        _focus={{ boxShadow: "none" }}
      >
        Blog
      </Button>
      <Button
        w="100%"
        variant="ghost"
        _hover={{ bg: { bg }, color: "blue.500" }}
        _focus={{ boxShadow: "none" }}
      >
        Contact us
      </Button>
    </VStack>
  );

  return (
    <Box
      borderTop="5px solid"
      borderTopColor={!bg}
      pos="sticky"
      top="0"
      bg={bg}
      boxShadow="md"
      zIndex="sticky"
    >
      <Box h="4.5rem" maxW="1200px" mx="auto">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex>
            <HStack>
              <Heading>VieTravel</Heading>
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing="5" d={{ base: "none", md: "flex" }}>
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
                About
              </Button>
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
                Articles
              </Button>
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
                Blog
              </Button>
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
                Contact us
              </Button>
            </HStack>
          </Flex>
          <Flex>
            <HStack>
              <Link to="/signin">
                <Button
                  variant="ghost"
                  _focus={{ boxShadow: "none" }}
                  _hover={{ bg: { bg } }}
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  color={useColorModeValue("white")}
                  _focus={{ boxShadow: "none" }}
                  bg={useColorModeValue("blue.500", "blue.700")}
                  _hover={{ bg: useColorModeValue("blue.300", "blue.500") }}
                >
                  Sign up
                </Button>
              </Link>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
              _focus={{ boxShadow: "none" }}
              _hover={{ bg: { bg } }}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </Box>
    </Box>
  );
};

export default Navbar;
