import React, { useContext } from "react";
import { HStack, Box, Flex, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import axios from "axios";
import { useHistory } from "react-router";
import Bill from "./Bill";
import Search from "./Search";
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
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex>
            <HStack spacing="5">
              <Heading as="a">
                <Link to="/">GoGo</Link>
              </Heading>
              <Box mt="2">
                <Search />
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
                <Link to="/hotel">Đặt phòng khách sạn</Link>
              </Button>
              <Button
                variant="ghost"
                scale="1"
                transform="auto"
                _hover={{
                  color: "blue.500",
                  scale: "1.2",
                }}
              >
                <Link to="/restaurant">Đặt bàn nhà hàng</Link>
              </Button>
              <Button
                variant="ghost"
                scale="1"
                transform="auto"
                _hover={{
                  color: "blue.500",
                  scale: "1.2",
                }}
              >
                <Link to="/car">Thuê xe tự lái</Link>
              </Button>
              {/* <Bill /> */}
              {user ? (
                <>
                  <Bill />
                  <Button
                    variant="ghost"
                    color="orange.500"
                    scale="1"
                    transform="auto"
                    _hover={{
                      scale: "1.2",
                    }}
                  >
                    <Link to="/settings">{user.userName}</Link>
                  </Button>
                  <Button
                    color="white"
                    _focus={{ boxShadow: "none" }}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.300" }}
                    onClick={signOut}
                  >
                    Đăng xuất
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
                    <Link to="/signin">Đăng nhập</Link>
                  </Button>
                  <Button
                    color="white"
                    _focus={{ boxShadow: "none" }}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.300" }}
                  >
                    <Link to="/signup">Đăng ký</Link>
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
