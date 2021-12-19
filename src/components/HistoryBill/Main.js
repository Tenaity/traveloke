import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React, { useRef } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useHistory } from "react-router";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  let dateCheckIn = new Date(data.checkIn);
  let dateCheckOut = new Date(data.checkOut);
  const toast = useToast();
  const history = useHistory();
  return (
    <Box
      w="7xl"
      justifySelf="center"
      alignSelf="center"
      mb="10"
      p={{ sm: "24px", md: "44px" }}
      shadow="lg"
    >
      <Box mb={{ sm: "40px" }}>
        <Flex direction="column" w="100%">
          <Heading>Lịch sử thanh toán</Heading>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Table mb="30px">
            <Thead>
              <Tr>
                <Th fontSize="sm" fontWeight="normal">
                  Dịch vụ
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Mã hoá đơn
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Tình trạng
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Ngày đặt
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Ngày trả
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Phụ phí
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Thành tiền
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data && (
                <>
                  <Tr>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {data.service}
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {data.id}
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {!data.status ? "Chưa thanh toán" : "Đã thanh toán"}
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {`${dateCheckIn.getDate()}/${
                          dateCheckIn.getMonth() + 1
                        }/${dateCheckIn.getFullYear()}`}
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {`${dateCheckOut.getDate()}/${
                          dateCheckOut.getMonth() + 1
                        }/${dateCheckOut.getFullYear()}`}
                      </Text>
                    </Td>
                    <Td minW="125px" boxSizing="border-box">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {data.additionalFee}
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {data.total}
                      </Text>
                    </Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

const Main = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const componentRef = useRef();
  const userId = localStorage.getItem("useId");
  let { id } = useParams();
  console.log("BillIDDDD", id);
  const fetcher = (url) => {
    const token = localStorage.getItem("token");
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data: bill } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${id}`,
    fetcher,
    { refreshInterval: 1000 }
  );
  console.log("billlllllxxx", bill);

  return (
    <>
      <Flex direction="column" pt="10">
        <ComponentToPrint
          data={bill}
          ref={componentRef}
          textColor={textColor}
        />
      </Flex>
    </>
  );
};

export default Main;
