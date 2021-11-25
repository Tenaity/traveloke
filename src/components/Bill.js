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
  Input,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import ItemBill from "./ItemBill";
import BillingRow from "./BillingRow";
import { Link } from "react-router-dom";
const Bill = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const billingData = [
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      number: "FRB1235476",
    },
    {
      name: "Lucas Harper",
      company: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      number: "FRB1235476",
    },
    {
      name: "Ethan James",
      company: "Fiber Notion",
      email: "ethan@fiber.com",
      number: "FRB1235476",
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
                      company={row.company}
                      email={row.email}
                      number={row.number}
                      key={index}
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
