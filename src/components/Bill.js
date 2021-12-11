import React, { useEffect, useContext } from "react";
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
} from "@chakra-ui/react";
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

  const fetchBill = async () => {
    try {
      const token = localStorage.getItem("token");
      const option = {
        method: "get",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      console.log("res", response);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchBill();
  }, []);
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
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Bill Information</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" w="100%">
              {billingData.map((row, index) => {
                return (
                  <Link to="/invoice">
                    <BillingRow
                      name={row.name}
                      email={row.email}
                      phone={row.phone}
                      service={row.service}
                      price={row.price}
                    />
                  </Link>
                );
              })}
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bill;
