import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { checkIn, checkOut, additionalFee, service, total } = props;

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
            Check In:
            <Text as="span" color="gray.500" ml="1">
              {checkIn}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            CheckOut:
            <Text as="span" color="gray.500" ml="1">
              {checkOut}
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
