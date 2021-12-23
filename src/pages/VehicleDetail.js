import React, { useState, useContext } from "react";
import axios from "axios";
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
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Footer from "../components/Footer";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import CarCarouselBeauty from "../components/CarCarouselBeauty";
import { useToast } from "@chakra-ui/react";
import AppContext from "../components/AppContext";
import ReactDatePicker from "react-datepicker";
import { Alert, AlertIcon } from "@chakra-ui/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VehicleDetail = () => {
  let { id } = useParams();
  const { data: vehicle } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/detailVehicle/${id}`,
    fetcher
  );
  const toast = useToast();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const token = localStorage.getItem("token");
  const { state } = useContext(AppContext);
  const userName = state?.user?.userName;
  const userId = state?.user?.userId;
  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays = startDate && endDate && Math.round(Math.abs((startDate - endDate) / oneDay)) + 1;

  console.log("zz", endDate);

  const onSubmitHandle = async (e) => {
    if (userName) {
      if (startDate && endDate) {
        if (startDate > endDate) {
          toast({
            render: () => (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                Vui lòng chọn lại thời gian thuê và trả xe!
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
                service: "selfVehicle",
                additionalFee: 20,
                status: "false",
                guest: userId,
                selfVehicle: vehicle.idSelfVehicle.id,
                detailVehicle: vehicle._id,
                total: vehicle.price * totalDays,
                name: vehicle.idSelfVehicle.name,
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
                    Thuê xe thành công!
                  </Alert>
                ),
              });
            }
            console.log(response);
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        toast({
          render: () => (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              Bạn cần nhập đủ thông tin để thuê xe!
            </Alert>
          ),
        });
      }
    } else {
      toast({
        render: () => (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            Bạn cần đăng nhập để thuê xe!
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
          <BreadcrumbMain urls={["Trang chủ", "Xe tự lái", "Đặt xe"]} />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              <CarCarouselBeauty imageCover={vehicle?.images?.[0]} listImage={vehicle?.images} />
              <Box ml="10">
                <Heading mb="10">{vehicle?.idSelfVehicle.name}</Heading>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">{vehicle?.idSelfVehicle.address}</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <MdAirlineSeatReclineNormal />
                  <Text ml="5px">{vehicle?.type}</Text>
                </Flex>
                {/* <SimpleGrid columns={{ base: 2 }}>
                  <Flex alignItems="center" mb="4">
                    <MdAirlineSeatReclineNormal />
                    <Text ml="5px">5 chỗ ngồi</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <RiDoorLine />
                    <Text ml="5px">4 cửa</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiDiscGolfBag />
                    <Text ml="5px">1 hành lý lớn</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiDuffelBag />
                    <Text ml="5px">1 hành lý nhỏ</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FiCrosshair />
                    <Text ml="5px">Điều hòa nhiệt độ</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GrManual />
                    <Text ml="5px">Hộp số tay</Text>
                  </Flex>
                </SimpleGrid> */}
                <Stack>
                  <Box d="flex">
                    <Box mr="25px">
                      <Text mb="4">Thuê xe:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          isClearable
                          placeholderText="Chọn ngày thuê xe"
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="4">Trả xe:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          isClearable
                          placeholderText="Chọn ngày trả xe"
                        />
                      </InputGroup>
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text as="button" align="left" ml="10px" mb="2">
                      Thanh toán khi đến nhận xe
                    </Text>
                  </Box>
                  <Flex alignItems="center" pb="3">
                    <Heading size="lg" mr="2">
                      Giá :
                    </Heading>
                    <Heading size="lg" color="green.500">
                      {totalDays ? vehicle?.price * totalDays : vehicle?.price} $
                    </Heading>
                  </Flex>
                  <Box>
                    <Button
                      w="300px"
                      color="white"
                      bg="green.500"
                      _hover={{
                        bg: "green.300",
                      }}
                      _focus={{ boxShadow: "none" }}
                      onClick={onSubmitHandle}
                    >
                      Đặt xe
                    </Button>
                  </Box>
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

export default VehicleDetail;
