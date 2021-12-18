import {
  Box,
  Flex,
  Heading,
  Stack,
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
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PayPalButton } from "react-paypal-button-v2";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  let dateCheckIn = new Date(data.checkIn);
  let dateCheckOut = new Date(data.checkOut);
  const toast = useToast();
  return (
    <Box
      w={{ sm: "330px", md: "500px", lg: "900px" }}
      justifySelf="center"
      alignSelf="center"
      mb="10"
      p={{ sm: "24px", md: "44px" }}
      shadow="lg"
    >
      <Box mb={{ sm: "40px" }}>
        <Flex direction="column" w="100%">
          <Heading>Thanh toán hoá đơn</Heading>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Table mb="85px">
            <Thead>
              <Tr>
                <Th color="gray.400" fontSize="sm" fontWeight="normal" ps="0px">
                  Dịch vụ
                </Th>
                <Th color="gray.400" fontSize="sm" fontWeight="normal">
                  Ngày đặt
                </Th>
                <Th color="gray.400" fontSize="sm" fontWeight="normal">
                  Ngày trả
                </Th>
                <Th color="gray.400" fontSize="sm" fontWeight="normal">
                  Phụ phí
                </Th>
                <Th color="gray.400" fontSize="sm" fontWeight="normal">
                  Thành tiền
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data && (
                <>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        {data.service}
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
          <PayPalButton
            options={{
              clientId:
                "AditNkLJT4JHknvoPaV4m12tWAGIk0dZ-gsAHX5gsXi4KfqlFeFS57W9E20nQaPKOy-W_bQJWoyBpQEr",
              currency: "USD",
            }}
            amount={data?.total}
            onSuccess={(details, data) => {
              toast({
                render: () => (
                  <Alert status="success" variant="left-accent">
                    <AlertIcon />
                    Đặt phòng thành công!
                  </Alert>
                ),
              });
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

function Invoice() {
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
    fetcher
  );
  console.log("billlllllxxx", bill);

  return (
    <>
      <Navbar />
      <Flex direction="column" pt={{ sm: "100px", lg: "50px" }}>
        <ComponentToPrint
          data={bill}
          ref={componentRef}
          textColor={textColor}
        />
      </Flex>
      <Footer />
    </>
  );
}

export default Invoice;
