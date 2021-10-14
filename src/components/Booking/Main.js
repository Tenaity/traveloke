import React from "react";
import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardHotel from "./CardHotel";
import Navbar from "../Navbar";
import BreadcrumbMain from "../BreadcrumbMain";
import { IoMoonOutline, IoCaretDownOutline } from "react-icons/io5";
import PaginationMain from "./PaginationMain";
const Main = () => {
  return (
    <>
      <Navbar />
      <Box d="flex" flexWrap="wrap" maxW="7xl" mx="auto">
        <BreadcrumbMain />
        <Box w="7xl">
          <Flex
            pt="3"
            pb="5"
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
        </Box>

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
      </Box>
      <PaginationMain />
    </>
  );
};

export default Main;
