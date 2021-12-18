import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import useSWR from "swr";
function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { checkIn, checkOut, additionalFee, service, total, billId } = props;
  let dateCheckIn = new Date(checkIn);
  let dateCheckOut = new Date(checkOut);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const deleteBill = async () => {
    try {
      const option = {
        method: "delete",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${billId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetcher = (url) => {
  //   return fetch(url, {
  //     method: "delete",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((response) => response.json());
  // };
  // function deleteBill(params) {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useSWR(
  //     `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${billId}`,
  //     fetcher
  //   );
  // }

  return (
    <Box p="24px" bg={bgColor} mb="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          {/* <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text> */}
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Service:
            <Text as="span" color="gray.500" ml="1">
              {service}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            BillId:
            <Text as="span" color="gray.500" ml="1">
              {billId}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Check In:
            <Text as="span" color="gray.500" ml="1">
              {`${dateCheckIn.getDate()}/${
                dateCheckIn.getMonth() + 1
              }/${dateCheckIn.getFullYear()}`}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            CheckOut:
            <Text as="span" color="gray.500" ml="1">
              {`${dateCheckOut.getDate()}/${
                dateCheckOut.getMonth() + 1
              }/${dateCheckOut.getFullYear()}`}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Additional Fee:
            <Text as="span" color="gray.500" ml="1">
              {additionalFee}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Price:
            <Text as="span" color="gray.500" ml="1">
              {total}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            onClick={deleteBill}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
          </Button>
          {/* <Button p="0px" bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDIT
              </Text>
            </Flex>
          </Button> */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
