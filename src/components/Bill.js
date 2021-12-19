import React, { useContext } from "react";
import AppContext from "./AppContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import useSWR from "swr";
import BillingRow from "./BillingRow";
const Bill = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { state } = useContext(AppContext);
  const userId = state.user.userId;

  const fetcher = (url) => {
    const token = localStorage.getItem("token");
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data: bills } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  console.log("aaaa", bills);
  return (
    <>
      <Button
        variant="ghost"
        transform="auto"
        _hover={{
          color: "green.500",
        }}
        ref={btnRef}
        onClick={onOpen}
      >
        Hoá đơn
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Bill Information</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" w="100%">
              {bills ? (
                bills.map((row, index) => {
                  return (
                    <BillingRow
                      nameHotel={row?.nameHotel}
                      additionalFee={row.additionalFee}
                      checkOut={row.checkOut}
                      checkIn={row.checkIn}
                      service={row.service}
                      billId={row.id}
                      total={row.total}
                    />
                  );
                })
              ) : (
                <>
                  <Flex alignItems="center" justifyContent="center">
                    <Heading>Không có bill</Heading>
                  </Flex>
                </>
              )}
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bill;
