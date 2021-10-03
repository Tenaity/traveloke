import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  HStack,
  Stack,
  Flex,
} from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardHotel from "./CardHotel";
import Navbar from "../Navbar";
import Carousels from "../Carousels";
import BreadcrumbMain from "../BreadcrumbMain";
import {
  IoLocationOutline,
  IoMoonOutline,
  IoCaretDownOutline,
} from "react-icons/io5";
import PaginationMain from "./PaginationMain";
const Main = () => {
  return (
    <>
      <Navbar />
      <Container d="flex" flexWrap="wrap" maxW="7xl">
        <BreadcrumbMain />
        <Carousels />
        <Container maxW="7xl">
          <Flex
            pt="10"
            pb="10"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Heading size="md">2033 homestay tại Hà Nội</Heading>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationOutline />}
                />
                <Input
                  type="tel"
                  placeholder="Đà Nẵng"
                  _focus={{ boxShadow: "1px none" }}
                  w="500px"
                />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoMoonOutline />}
                />
                <Input
                  as="select"
                  placeholder="Số đêm ở tại khách sạn"
                  w="250px"
                  _focus={{ boxShadow: "none" }}
                  icon={<IoCaretDownOutline />}
                >
                  <option value="option1">Sắp xếp theo</option>
                  <option value="option1">2 Đêm</option>
                  <option value="option1">3 Đêm</option>
                  <option value="option1">4 Đêm</option>
                  <option value="option1">5 Đêm</option>
                  <option value="option1">6 Đêm</option>
                </Input>
              </InputGroup>
            </Box>
          </Flex>
        </Container>

        <Box mx="auto">
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
          </SimpleGrid>
        </Box>
      </Container>
      <PaginationMain />
    </>
  );
};

export default Main;
