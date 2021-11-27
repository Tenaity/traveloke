import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
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
import React, { useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PayPalButton } from "react-paypal-button-v2";

class ComponentToPrint extends React.Component {
  render() {
    const { textColor } = this.props;

    return (
      <Box
        w={{ sm: "330px", md: "500px", lg: "900px" }}
        justifySelf="center"
        alignSelf="center"
        mb="10"
        p={{ sm: "24px", md: "44px" }}
        shadow="lg"
      >
        <Box mb={{ sm: "60px", md: "95px" }}>
          <Flex direction="column" w="100%">
            <Heading mb="10">GoGo Invoice</Heading>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
            >
              <Flex
                direction="column"
                maxW={{ sm: "100%", md: "150px", lg: "300px" }}
                mb={{ sm: "48px", md: "0px" }}
              >
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="lg"
                  mb="12px"
                >
                  St. Independence Embankment, 050105 Bucharest, Romania
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  tel: +4 (074) 1090873
                </Text>
              </Flex>
              <Flex
                direction="column"
                textAlign={{ sm: "start", md: "end" }}
                maxW={{ sm: "100%", md: "170px" }}
              >
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="lg"
                  mb="12px"
                >
                  Billed to: John Doe
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  4006 Locust View Drive San Francisco CA California
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" w="100%">
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
              mb="60px"
            >
              <Flex direction="column" mb={{ sm: "16px", md: "0px" }}>
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mb="8px"
                >
                  Invoice no
                </Text>
                <Text color="gray.500" fontWeight="bold" fontSize="lg">
                  #0453119
                </Text>
              </Flex>
              <Flex direction="column">
                <Stack direction="row" mb="8px" justify={{ md: "end" }}>
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Invoice date:{" "}
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="lg">
                    06/03/2021
                  </Text>
                </Stack>
                <Stack direction="row" justify={{ md: "end" }}>
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Due date:{" "}
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="lg">
                    29/07/2021
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            <Box overflowX={{ sm: "scroll", lg: "hidden" }}>
              <Table mb="85px" overflowX={{ sm: "scroll", lg: "hidden" }}>
                <Thead>
                  <Tr>
                    <Th
                      color="gray.400"
                      fontSize="sm"
                      fontWeight="normal"
                      ps="0px"
                    >
                      Item
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Quantity
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Rate
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Amount
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Premium Support
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        1
                      </Text>
                    </Td>
                    <Td minW="125px" boxSizing="border-box">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 9.00
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Chakra UI - Dashboard PRO
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        3
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 99.00
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 297.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }} border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Parts for Service
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        1
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 89.00
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 89.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}></Td>
                    <Td></Td>
                    <Td>
                      <Text color={textColor} fontWeight="bold" fontSize="xl">
                        Total
                      </Text>
                    </Td>
                    <Td>
                      <Text color={textColor} fontWeight="bold" fontSize="xl">
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <PayPalButton
                options={{
                  clientId:
                    "AditNkLJT4JHknvoPaV4m12tWAGIk0dZ-gsAHX5gsXi4KfqlFeFS57W9E20nQaPKOy-W_bQJWoyBpQEr",
                  currency: "USD",
                }}
                amount="10"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
}

function Invoice() {
  const textColor = useColorModeValue("gray.700", "white");

  const componentRef = useRef();

  return (
    <>
      <Navbar />
      <Flex direction="column" pt={{ sm: "100px", lg: "50px" }}>
        <ComponentToPrint ref={componentRef} textColor={textColor} />
      </Flex>
      <Footer />
    </>
  );
}

export default Invoice;
