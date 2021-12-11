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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
  IoTvOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { FaToiletPaper, FaTemperatureHigh } from "react-icons/fa";
import {
  GiWashingMachine,
  GiSnowflake1,
  GiTooth,
  GiTowel,
  GiMedicinePills,
} from "react-icons/gi";
import Footer from "../components/Footer";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import FeedBack from "../components/FeedBack";
import NewFeedBack from "../components/NewFeedBack";
import CarouselBeauty from "../components/CarouselBeauty";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const HotelDetail = () => {
  let { id } = useParams();
  const { data = {} } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/room/`,
    fetcher
  );
  console.log(data);

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

  const toast = useToast();

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto">
          <BreadcrumbMain
            urls={["Trang chủ", "Phòng khách sạn", "Đặt phòng"]}
          />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              <CarouselBeauty />
              <Box ml="10">
                <Heading mb="4">The Galaxy Home</Heading>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Cầu Giấy, Hà Nội, Việt Nam</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <BiArea />
                  <Text ml="5px">Căn hộ dịch vụ &bull; 55m</Text>
                </Flex>
                <Text mb="4">
                  Phòng riêng &bull; 1 Phòng tắm &bull; 1 giường &bull; 1 phòng
                  ngủ &bull; 2 khách (tối đa 3 khách)
                </Text>
                <SimpleGrid columns={{ base: 3 }}>
                  <Flex alignItems="center" mb="4">
                    <IoWifiOutline />
                    <Text ml="5px">Wifi</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiWashingMachine />
                    <Text ml="5px">Máy giặt</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTowel />
                    <Text ml="5px">Khăn tắm</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaTemperatureHigh />
                    <Text ml="5px">Máy sấy</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <IoTvOutline />
                    <Text ml="5px">TV</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiMedicinePills />
                    <Text ml="5px">Dầu gội, dầu xả</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTooth />
                    <Text ml="5px">Kem đánh răng</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiSnowflake1 />
                    <Text ml="5px">Điều hòa</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaToiletPaper />
                    <Text ml="5px">Giấy vệ sinh</Text>
                  </Flex>
                </SimpleGrid>
                <Stack>
                  <Box d="flex">
                    <Box mr="25px">
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
                      <Text mb="4">Trả phòng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <DateTimePicker />
                      </InputGroup>
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text mt="2" as="button" align="left" ml="10px" mb="2">
                      Thanh toán khi nhận phòng hoặc thanh toán trực tiếp.
                    </Text>
                  </Box>
                  <Flex alignItems="center" pb="3">
                    <Heading size="lg" mr="2">
                      Giá :
                    </Heading>
                    <Heading size="lg" color="green.500">
                      500.000
                    </Heading>
                  </Flex>

                  <Flex justifyContent="center">
                    <Button
                      w="350px"
                      color="white"
                      bg="green.500"
                      _hover={{
                        bg: "green.300",
                      }}
                      _focus={{ boxShadow: "none" }}
                      onClick={() =>
                        toast({
                          render: () => (
                            <Alert status="success" variant="left-accent">
                              <AlertIcon />
                              Đặt phòng thành công!
                            </Alert>
                          ),
                        })
                      }
                    >
                      Đặt khách sạn
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
          <Box my="10">
            <Heading>Đánh giá khách sạn</Heading>
            <Box my="10" alignItems="center">
              <Tabs
                align="center"
                isManual
                variant="enclosed"
                colorScheme={"green"}
              >
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
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <FeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <FeedBack />
                    <FeedBack />
                    <NewFeedBack />
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

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "green.500" : "gray.300"}
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

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "green.500" : "gray.300"}
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

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "green.500" : "gray.300"}
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
