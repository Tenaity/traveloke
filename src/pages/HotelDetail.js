import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import SmallGallery from "../components/SmallGallery";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoMoonOutline,
  IoCaretDownOutline,
  IoManOutline,
  IoReceiptOutline,
} from "react-icons/io5";
const HotelDetail = () => {
  return (
    <Box py="10">
      <Box w="6xl" mx="auto">
        <BreadcrumbMain />
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <SmallGallery />
          <Box>
            <Heading mb="10">The Galaxy Home</Heading>
            <Flex alignItems="center" mb="2">
              <IoBusinessOutline />
              <Text ml="5px">Cầu Giấy, Hà Nội, Việt Nam</Text>
            </Flex>
            <Flex alignItems="center" mb="2">
              <IoBusinessOutline />
              <Text ml="5px">Căn hộ dịch vụ &bull; 55m</Text>
            </Flex>
            <Text mb="2">
              Phòng riêng &bull; 1 Phòng tắm &bull; 1 giường &bull; 1 phòng ngủ
              &bull; 2 khách (tối đa 3 khách)
            </Text>
            <Stack>
              {/* <Box>
                <Text mb="2">Thành phố địa điểm hoặc tên khách sạn:</Text>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<IoLocationOutline />}
                  />
                  <Input
                    type="tel"
                    placeholder="Đà Nẵng"
                    _focus={{ boxShadow: "1px none" }}
                  />
                </InputGroup>
              </Box> */}
              <Box d="flex">
                <Box mr="25px">
                  <Text mb="2">Nhận phòng:</Text>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<IoCalendarOutline />}
                    />
                    <Input
                      type="tel"
                      placeholder="Đặt phòng"
                      _focus={{ boxShadow: "1px none" }}
                    />
                  </InputGroup>
                </Box>
                <Box mr="25px">
                  <Text mb="2">Số đêm:</Text>
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
                      <option value="option1">1 Đêm</option>
                      <option value="option1">2 Đêm</option>
                      <option value="option1">3 Đêm</option>
                      <option value="option1">4 Đêm</option>
                      <option value="option1">5 Đêm</option>
                      <option value="option1">6 Đêm</option>
                    </Input>
                  </InputGroup>
                </Box>
              </Box>

              <Box d="flex" alignItems="baseline">
                <IoReceiptOutline />
                <Text as="button" align="left" ml="10px">
                  Thanh toán khi nhận phòng
                </Text>
              </Box>
              <Box d="flex" justifyContent="center">
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
    </Box>
  );
};

export default HotelDetail;
