import axios from "axios";
import React, { useState, useContext } from "react";
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
import CarouselBeauty from "../components/CarouselBeauty";
import ReactDatePicker from "react-datepicker";
import "../components/DateTimePicker/date-time-picker.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const HotelDetail = () => {
  let { id } = useParams();
  const { data: room } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/room/${id}`,
    fetcher
  );

  const toast = useToast();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const nowDate = new Date();
  console.log(nowDate);
  const user = state?.user?.userName;
  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays =
    startDate &&
    endDate &&
    Math.round(Math.abs((startDate - endDate) / oneDay)) + 1;
  const onSubmitHandle = async (e) => {
    if (user) {
      if (startDate && endDate) {
        if (startDate > endDate || startDate < nowDate || endDate < nowDate) {
          toast({
            render: () => (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                Vui l??ng ch???n l???i th???i gian ?????t ph??ng!
              </Alert>
            ),
          });
        } else {
          try {
            e.preventDefault();
            const option = {
              method: "post",
              url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
              data: {
                checkIn: startDate,
                checkOut: endDate,
                service: "hotel",
                additionalFee: 20,
                status: "false",
                guest: userId,
                hotel: room.idHotel.id,
                room: room._id,
                total: room.price * totalDays,
                name: room.idHotel.name,
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const response = await axios(option);
            if (response.status === 201) {
              toast({
                render: () => (
                  <Alert status="success" variant="left-accent">
                    <AlertIcon />
                    ?????t ph??ng th??nh c??ng!
                  </Alert>
                ),
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        toast({
          render: () => (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              B???n c???n nh???p ????? th??ng tin ????? ?????t ph??ng!
            </Alert>
          ),
        });
      }
    } else {
      toast({
        render: () => (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            B???n c???n ????ng nh???p ????? ?????t ph??ng!
          </Alert>
        ),
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto" mb="10">
          <BreadcrumbMain
            urls={["Trang ch???", "Ph??ng kh??ch s???n", "?????t ph??ng"]}
          />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              {room?.images && <CarouselBeauty images={room?.images} />}{" "}
              <Box ml="10">
                <Heading mb="4">{room?.idHotel.name}</Heading>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">{room?.idHotel.address}</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <BiArea />
                  <Text ml="5px">C??n h??? d???ch v??? &bull; 55m</Text>
                </Flex>
                <Text mb="4">
                  Ph??ng ri??ng &bull; 1 Ph??ng t???m &bull; 1 gi?????ng &bull; 1 ph??ng
                  ng??? &bull; 2 kh??ch (t???i ??a 3 kh??ch)
                </Text>
                <SimpleGrid columns={{ base: 3 }}>
                  <Flex alignItems="center" mb="4">
                    <IoWifiOutline />
                    <Text ml="5px">Wifi</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiWashingMachine />
                    <Text ml="5px">M??y gi???t</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTowel />
                    <Text ml="5px">Kh??n t???m</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaTemperatureHigh />
                    <Text ml="5px">M??y s???y</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <IoTvOutline />
                    <Text ml="5px">TV</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiMedicinePills />
                    <Text ml="5px">D???u g???i, d???u x???</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTooth />
                    <Text ml="5px">Kem ????nh r??ng</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiSnowflake1 />
                    <Text ml="5px">??i???u h??a</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaToiletPaper />
                    <Text ml="5px">Gi???y v??? sinh</Text>
                  </Flex>
                </SimpleGrid>
                <Stack>
                  <Box d="flex">
                    <Box mr="25px">
                      <Text mb="4">?????t ph??ng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          isClearable
                          placeholderText="Ch???n ng??y ?????t ph??ng"
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="4">Tr??? ph??ng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          isClearable
                          placeholderText="Ch???n ng??y tr??? ph??ng"
                        />
                      </InputGroup>
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text mt="2" as="button" align="left" ml="10px" mb="2">
                      Thanh to??n khi nh???n ph??ng ho???c thanh to??n tr???c ti???p.
                    </Text>
                  </Box>
                  <Flex alignItems="center" pb="3">
                    <Heading size="lg" mr="2">
                      Gi?? :
                    </Heading>
                    <Heading size="lg" color="green.500">
                      {totalDays ? room?.price * totalDays : room?.price} $
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
                      ?????t kh??ch s???n
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default HotelDetail;
