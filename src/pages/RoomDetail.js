import axios from "axios";
import React, { useContext, useState } from "react";
import AppContext from "../components/AppContext";
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
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import FeedBack from "../components/FeedBack";
import NewFeedBack from "../components/NewFeedBack";
import CarouselBeauty from "../components/CarouselBeauty";
import { useFeedback } from "../hooks/useFeedback";
import ReactDatePicker from "react-datepicker";
import "../components/DateTimePicker/date-time-picker.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export const HotelData = (id) => {
//   const { data: hotel } = useSWR(
//     `https://pbl6-travelapp.herokuapp.com/hotel/${id}`,
//     fetcher
//   );
//   console.log("hotel", hotel);
// };
const HotelDetail = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.user;
  const [errorMessage, setErrorMessage] = useState("");
  let { id } = useParams();
  const { data: room } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/room/${id}`,
    fetcher
  );
  // {
  //   room && <HotelData id={room.idHotel} />;
  // }
  console.log("room detailllll", room);
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

  const { handleEnter, inputValue, handleUserInput, listFeedback } =
    useFeedback();

  const toast = useToast();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate);
  console.log(endDate);
  const [userSubmit, setUserSubmit] = useState({
    checkIn: "",
    checkOut: "",
    guest: "",
    service: "hotel",
    additionalFee: "200000",
    hotel: "",
    status: "false",
    room: "",
  });
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  // setUserSubmit({
  //   ...userSubmit,
  //   checkIn: startDate,
  //   checkOut: endDate,
  //   guest: token,
  //   hotel: room.idHotel,
  //   room: room._id,
  //   total: room.price,
  // });
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
        data: userSubmit,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios(option);
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
    toast({
      render: () => (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Đặt phòng thành công!
        </Alert>
      ),
    });
    console.log("data input", userSubmit);
  };

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
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          isClearable
                          placeholderText="I have been cleared!"
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="4">Trả phòng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          isClearable
                          placeholderText="I have been cleared!"
                        />
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
                      {room ? room.price : 100}
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
                      onClick={onSubmitHandle}
                    >
                      Đặt khách sạn
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </SimpleGrid>
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
