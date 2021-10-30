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
  Button,
  Wrap,
} from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
import FeedBack from "../components/FeedBack";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const HotelDetail = () => {
  let { id } = useParams();
  const { data = [] } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/room/`,
    fetcher
  );

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto">
          <BreadcrumbMain urls={["Home", "Hotel", "Booking"]} />
          <Box>
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
          <Box my="10">
            <Heading>Đánh giá khách sạn</Heading>
            <Box my="10" alignItems="center">
              <Tabs align="center" isManual variant="enclosed">
                <TabList>
                  <Tab>Tất cả</Tab>
                  <Tab>5 sao</Tab>
                  <Tab>4 sao</Tab>
                  <Tab>3 sao</Tab>
                  <Tab>2 sao</Tab>
                  <Tab>1 sao</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Box my="10">
            <Heading>Phòng liên quan</Heading>
            <Flex my="10">
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default HotelDetail;
