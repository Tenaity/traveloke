import React from "react";
import { Box, SimpleGrid, Heading, Flex, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import CardRestaurant from "./CardRestaurant";
import BreadcrumbMain from "../BreadcrumbMain";
import PaginationMain from "./PaginationMain";
import useSWR from "swr";
import { dummyData } from "./DummyData";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Main = () => {
  const { data = [] } = useSWR(
    "https://pbl6-travelapp.herokuapp.com/hotel",
    fetcher
  );
  return (
    <>
      <Box d="flex" flexWrap="wrap" maxW="6xl" mx="auto" mt="5">
        <BreadcrumbMain urls={["Home", "Restaurant"]} />
        <Box w="6xl">
          <Box my="7">
            <Heading size="lg">Nhà hàng tại Hà Nội</Heading>
          </Box>
          <Flex my="10" justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Box mr="10">Filter by</Box>
              <HStack spacing="5">
                <Select placeholder="Khu vực">
                  <option value="option1">Ba Đình</option>
                  <option value="option2">Hoàn Kiếm</option>
                  <option value="option3">Đống Đa</option>
                </Select>
                <Select placeholder="Giá">
                  <option value="option1">0$-25$</option>
                  <option value="option2">25$-50$</option>
                  <option value="option3">50$+</option>
                </Select>
                <Select placeholder="Loại Hình">
                  <option value="option1">Việt</option>
                  <option value="option2">Hàn</option>
                  <option value="option3">Nhật</option>
                  <option value="option4">Âu</option>
                </Select>
              </HStack>
            </Flex>
            <Flex alignItems="center">
              <Box mr="10">Sort by</Box>
              <Box>
                <Select placeholder="Price">
                  <option value="option1">Seller</option>
                </Select>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box mx="auto">
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            {dummyData?.map((res) => (
              <CardRestaurant key={res.id} res={res} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <PaginationMain />
    </>
  );
};

export default Main;
