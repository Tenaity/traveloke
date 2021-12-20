import axios from "axios";
import React, { useState, useEffect } from "react";
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
import { Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BreadcrumbMain from "../../components/BreadcrumbMain";
import {
    IoBusinessOutline,
    IoCalendarOutline,
    IoReceiptOutline,
    IoTimeOutline,
} from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import NumberButton from "../../components/NumberButton";
import RestaurantFeedBack from "../../components/RestaurantFeedBack";
import ResCarouselBeauty from "../../components/ResCarouselBeauty";
import NewFeedBack from "../../components/NewFeedBack";
import { useFeedback } from "../../hooks/useFeedback";

const Main = () => {
    let { id } = useParams();
    const property = {
        imageUrl: "/images/restaurant/res2_1.jpg",
        imageAlt: "Restaurant",
        beds: 3,
        baths: 2,
        title: "Akira Back - JW Marriott Hotel Hanoi",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };
    const [restaurant, setRestaurant] = useState({});
    const fetchRestaurant = async () => {
        try {
            const option = {
                method: "get",
                url: `https://pbl6-travelapp.herokuapp.com/restaurant/${id}`,
            };
            const response = await axios(option);
            setRestaurant(response.data);
            console.log("res", response);
        } catch (err) {
            console.log(err.response.data.message);
        }
    };
    useEffect(() => {
        fetchRestaurant();
    }, []);
    console.log("restaurant", restaurant)
    const { handleEnter, inputValue, handleUserInput, listFeedback } = useFeedback();
    return (
        <>
            <Box py="5">
                <Box w="6xl" mx="auto">
                    <BreadcrumbMain urls={["Trang chủ", "Nhà hàng", "Đặt bàn"]} />
                    <Box>
                        <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
                            <ResCarouselBeauty listImage={restaurant.images} imageCover={restaurant.imageCover} />
                            <Box ml="10">
                                <Heading mb="10">{restaurant.name}</Heading>
                                <Flex alignItems="baseline" mb="4">
                                    <IoBusinessOutline />
                                    <Flex flexDirection="column" ml="5px">
                                        <Text fontWeight="bold">Địa chỉ</Text>
                                        <Text>{restaurant.address}</Text>
                                    </Flex>
                                </Flex>
                                <Flex alignItems="baseline" mb="4">
                                    <IoTimeOutline />
                                    <Flex flexDirection="column" ml="5px">
                                        <Text fontWeight="bold">Giờ hoạt động</Text>
                                        <Text>6:00 pm – 9:00 pm hàng ngày</Text>
                                    </Flex>
                                </Flex>
                                <Flex alignItems="baseline" mb="4">
                                    <GiForkKnifeSpoon />
                                    <Flex flexDirection="column" ml="5px">
                                        <Text fontWeight="bold">Ẩm thực</Text>
                                        <Text>{restaurant.type}</Text>
                                    </Flex>
                                </Flex>
                                <Flex alignItems="baseline" mb="4">
                                    <FaParking />
                                    <Flex flexDirection="column" ml="5px">
                                        <Text fontWeight="bold">Chi tiết bãi đậu xe</Text>
                                        <Text>Bãi đậu xe khách sạn</Text>
                                    </Flex>
                                </Flex>
                                <Flex alignItems="baseline" mb="4">
                                    <AiOutlineCreditCard />
                                    <Flex flexDirection="column" ml="5px">
                                        <Text fontWeight="bold">Các lựa chọn thanh toán</Text>
                                        <Text>AMEX, JCB, MasterCard, Visa</Text>
                                    </Flex>
                                </Flex>
                                <Stack>
                                    <Box d="flex">
                                        <Box mr="25px" width="390px">
                                            <Text mb="4">Đặt bàn:</Text>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<IoCalendarOutline />}
                                                />
                                                <DateTimePicker />
                                            </InputGroup>
                                        </Box>
                                        <Box mr="25px">
                                            <Text mb="4">Số người:</Text>
                                            <NumberButton />
                                        </Box>
                                    </Box>

                                    <Box d="flex" alignItems="baseline">
                                        <IoReceiptOutline />
                                        <Text as="button" align="left" ml="10px" mb="2">
                                            Thanh toán tại nhà hàng
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Button
                                            w="300px"
                                            color="white"
                                            bg="green.500"
                                            _hover={{
                                                bg: "green.300",
                                            }}
                                            _focus={{ boxShadow: "none" }}
                                        >
                                            Đặt bàn
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </SimpleGrid>
                    </Box>
                    <Box my="10">
                        <Heading>Đánh giá nhà hàng</Heading>
                        <Box my="10" alignItems="center">
                            <Tabs
                                align="center"
                                isManual
                                variant="enclosed"
                                colorScheme="green"
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
                                        {listFeedback.map((value, index) => {
                                            return (
                                                <RestaurantFeedBack
                                                    vote={value.vote}
                                                    comment={value.comment}
                                                    key={index}
                                                />
                                            );
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        {listFeedback.map((value, index) => {
                                            if (value.vote === 5) {
                                                return (
                                                    <RestaurantFeedBack
                                                        vote={value.vote}
                                                        comment={value.comment}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        {listFeedback.map((value, index) => {
                                            if (value.vote === 4) {
                                                return (
                                                    <RestaurantFeedBack
                                                        vote={value.vote}
                                                        comment={value.comment}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        {listFeedback.map((value, index) => {
                                            if (value.vote === 3) {
                                                return (
                                                    <RestaurantFeedBack
                                                        vote={value.vote}
                                                        comment={value.comment}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        {listFeedback.map((value, index) => {
                                            if (value.vote === 2) {
                                                return (
                                                    <RestaurantFeedBack
                                                        vote={value.vote}
                                                        comment={value.comment}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        {listFeedback.map((value, index) => {
                                            if (value.vote === 1) {
                                                return (
                                                    <RestaurantFeedBack
                                                        vote={value.vote}
                                                        comment={value.comment}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        })}
                                        <NewFeedBack
                                            handleEnter={handleEnter}
                                            handleUserInput={handleUserInput}
                                            inputValue={inputValue}
                                        />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Box>
                    <Box my="10">
                        <Heading>Nhà hàng liên quan</Heading>
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
                                            {property.rooms} tables &bull; {property.available}{" "}
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
                                            {property.rooms} tables &bull; {property.available}{" "}
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
                                            {property.rooms} tables &bull; {property.available}{" "}
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
            </Box>
        </>
    );
};

export default Main;