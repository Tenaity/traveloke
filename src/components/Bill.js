import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
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
} from "@chakra-ui/react";
import useSWR from "swr";
import BillingRow from "./BillingRow";
import { Link } from "react-router-dom";
const Bill = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const billingData = [
    {
      name: "Oliver Liam",
      email: "oliver@burrito.com",
      phone: "0846001503",
      service: "Car",
      price: "10$",
    },
    {
      name: "Lucas Harper",
      email: "lucas@stone-tech.com",
      phone: "0846001503",
      service: "Hotel",
      price: "10$",
    },
    {
      name: "Ethan James",
      email: "ethan@fiber.com",
      phone: "0846001503",
      service: "Restaurant",
      price: "10$",
    },
  ];

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

  const { data: bills = [] } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
    fetcher
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
                <Text>Không có bill</Text>
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
