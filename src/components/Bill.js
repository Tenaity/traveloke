import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
const Bill = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { state } = useContext(AppContext);
  const userId = state.user.userId;
  const token = localStorage.getItem("token");
  console.log("token vu", token);

  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data: bills } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/bill/${userId}`, token],
    fetcher,
    { refreshInterval: 1000 }
  );

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      console.log("axios", response.data);
    } catch (err) {
      console.log("loi");
    }
  };

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
            <Button onClick={onSubmitHandle}>aaaaa</Button>
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
