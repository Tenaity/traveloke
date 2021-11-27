import React from "react";
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
  return (
    <>
      <Button
        variant="ghost"
        scale="1"
        transform="auto"
        _hover={{
          color: "blue.500",
          scale: "1.2",
        }}
        ref={btnRef}
        onClick={onOpen}
      >
        Bill
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
