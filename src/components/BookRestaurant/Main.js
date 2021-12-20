import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, Heading, Flex, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import CardRestaurant from "./CardRestaurant";
import BreadcrumbMain from "../BreadcrumbMain";
import PaginationMain from "./PaginationMain";
const Main = () => {
  const [priceFrom, setPriceFrom] = useState("300000");
  const [priceTo, setPriceTo] = useState("30000000");
  const [sortBy, setSortBy] = useState("vote");
  const onChangeHandle = (e) => {
    setPriceFrom(e.target.value.split(",")[0]);
    setPriceTo(e.target.value.split(",")[1] || priceFrom);
  };
  const onChangeHandleSort = (e) => {
    setSortBy(e.target.value);
  };
  const [listRestaurant, setListRestaurant] = useState([]);
  const fetchRestaurants = async () => {
    try {
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/restaurant`,
      };
      const response = await axios(option);
      setListRestaurant(response.data);
      console.log("res", response);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, [priceFrom, priceTo, sortBy]);
  return (
    <>
      <Box d="flex" flexWrap="wrap" maxW="6xl" mx="auto" mt="5">
        <BreadcrumbMain urls={["Trang chủ", "Nhà Hàng"]} />
        <Box w="6xl">
          <Box my="7">
            <Heading size="lg">420 Nhà hàng tại Hà Nội</Heading>
          </Box>
          <Flex my="10" justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <HStack spacing="5">
                <Flex alignItems="center">
                  <Box mr="5">Bàn</Box>
                  <Select>
                    <option value="option1">1-2 người</option>
                    <option value="option2">3-8 người</option>
                    <option value="option3">Bàn lớn hơn</option>
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box mr="5">Giá</Box>
                  <Select onChange={onChangeHandle}>
                    <option value="100000,1000000">1$-5$</option>
                    <option value="1000000,2000000">5$-10$</option>
                    <option value="300000">10$+</option>
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box mr="5">Sao</Box>
                  <Select>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                  </Select>
                </Flex>
              </HStack>
            </Flex>
            <Flex alignItems="center">
              <Box mr="10">Sắp xếp</Box>
              <Box>
                <Select onChange={onChangeHandleSort}>
                  <option value="vote">Nổi bật</option>
                  <option value="price-asc">Giá tăng</option>
                  <option value="price-desc">Giá giảm</option>
                </Select>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box mx="auto">
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            {listRestaurant?.map((res) => (
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
