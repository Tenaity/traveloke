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
} from "@chakra-ui/react";
import ItemBill from "./ItemBill";
const Bill = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          <DrawerHeader>List Bills</DrawerHeader>

          <DrawerBody>
            <ItemBill />
            <ItemBill />
            <ItemBill />
            <ItemBill />
            <ItemBill />
            <ItemBill />
            <ItemBill />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bill;
