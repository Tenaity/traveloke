import React, { Fragment } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import SmallGallery from "../components/SmallGallery";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import Footer from "../components/Footer";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import NumberButton from "../components/NumberButton";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const HotelDetail = () => {
  let { id } = useParams();
  const { data = [] } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/room/`,
    fetcher
  );
  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto">
          <BreadcrumbMain urls={["Home", "Hotel", "Booking"]} />
          <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
            <SmallGallery />
            <Box>
              <Heading mb="10">The Galaxy Home</Heading>
              <Flex alignItems="center" mb="4">
                <IoBusinessOutline />
                <Text ml="5px">Cầu Giấy, Hà Nội, Việt Nam</Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <IoBusinessOutline />
                <Text ml="5px">Căn hộ dịch vụ &bull; 55m</Text>
              </Flex>
              <Text mb="4">
                Phòng riêng &bull; 1 Phòng tắm &bull; 1 giường &bull; 1 phòng
                ngủ &bull; 2 khách (tối đa 3 khách)
              </Text>
              <SimpleGrid columns={{ base: 3 }}>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Wifi</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Máy giặt</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Khăn tắm</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Máy sấy</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">TV</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Dầu gội, dầu xả</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Kem đánh răng</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Internet</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Điều hòa</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Giấy vệ sinh</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Xà phòng tắm</Text>
                </Flex>
              </SimpleGrid>
              <Stack>
                <Box d="flex">
                  <Box mr="25px" width="390px">
                    <Text mb="4">Nhận phòng:</Text>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<IoCalendarOutline />}
                      />
                      <DateTimePicker />
                    </InputGroup>
                  </Box>
                  <Box mr="25px">
                    <Text mb="4">Số đêm:</Text>
                    <NumberButton />
                  </Box>
                </Box>

                <Box d="flex" alignItems="baseline">
                  <IoReceiptOutline />
                  <Text as="button" align="left" ml="10px" mb="2">
                    Thanh toán khi nhận phòng
                  </Text>
                </Box>
                <Box>
                  <Button
                    w="300px"
                    color="white"
                    bg="blue.500"
                    _hover={{
                      bg: "blue.300",
                    }}
                    _focus={{ boxShadow: "none" }}
                  >
                    Đặt khách sạn
                  </Button>
                </Box>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default HotelDetail;
