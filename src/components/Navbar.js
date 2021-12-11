import React, { useContext } from "react";
import {
  HStack,
  Box,
  Flex,
  Button,
  Heading,
  Avatar,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import axios from "axios";
import { useHistory } from "react-router";
import Bill from "./Bill";
import Search from "./Search";
import gogo from "../assets/img/logo2.png";
const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.user;
  const history = useHistory();
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
      borderTopColor="green.500"
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
                <Link to="/">
                  <Image src={gogo} h="50" w="50" />
                </Link>
              </Heading>
              <Box mt="2">
                <Search />
              </Box>
            </HStack>
          </Flex>

          <Box>
            <HStack spacing="2">
              <Button
                variant="ghost"
                transform="auto"
                _hover={{
                  color: "green.500",
                }}
              >
                <Link to="/hotel">Đặt phòng khách sạn</Link>
              </Button>
              <Button
                variant="ghost"
                transform="auto"
                _hover={{
                  color: "green.500",
                }}
              >
                <Link to="/restaurant">Đặt bàn nhà hàng</Link>
              </Button>
              <Button
                variant="ghost"
                transform="auto"
                _hover={{
                  color: "green.500",
                }}
              >
                <Link to="/car">Thuê xe tự lái</Link>
              </Button>

              {user ? (
                <>
                  <Bill />
                  <Button
                    variant="ghost"
                    transform="auto"
                    _hover={{
                      color: "green.500",
                    }}
                  >
                    <Link to="/invoice">Thanh toán</Link>
                  </Button>
                  <Menu>
                    <MenuButton>
                      <Button variant="ghost" color="orange.500">
                        <Avatar src="" w="50px" h="50px" me="15px" />
                        <Text>{user.userName}</Text>
                      </Button>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to="/settings">Tài khoản</Link>
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem>
                        {" "}
                        <Text _focus={{ boxShadow: "none" }} onClick={signOut}>
                          Đăng xuất
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    transform="auto"
                    _hover={{
                      color: "green.500",
                    }}
                  >
                    <Link to="/signin">Đăng nhập</Link>
                  </Button>
                  <Button
                    color="white"
                    _focus={{ boxShadow: "none" }}
                    bg={"green.500"}
                    _hover={{ bg: "green.300" }}
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
