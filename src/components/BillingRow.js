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
import { Link } from "react-router-dom";
function BillingRow(props) {
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const { checkIn, checkOut, additionalFee, service, total, billId } = props;
  let dateCheckIn = new Date(checkIn);
  let dateCheckOut = new Date(checkOut);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const onHandleDelete = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "delete",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${billId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p="24px" bg={bgColor} mb="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Link to={"/invoice/" + `${billId}`}>
          <Flex direction="column" maxWidth="70%">
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
        </Link>
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
            onClick={onHandleDelete}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
