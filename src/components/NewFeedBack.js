import React, { useContext } from "react";
import { Flex, Box, Avatar, Input, Button } from "@chakra-ui/react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useToast } from "@chakra-ui/toast";
import { Alert, AlertIcon } from "@chakra-ui/react";
import AppContext from "./AppContext";
const NewFeedBack = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.user;
  const toast = useToast();
  return (
    <Flex alignItems="center">
      <Box>
        <Avatar src="https://bit.ly/dan-abramov" w="50px" h="50px" me="15px" />
      </Box>
      <Input
        placeholder="Write your comment..."
        borderRadius="15px"
        _focus={{ borderColor: "teal.300" }}
      />
      <Button
        bg="transparent"
        onClick={() => {
          user &&
            toast({
              render: () => (
                <Alert status="success" variant="left-accent">
                  <AlertIcon />
                  Thêm bình luận thành công!
                </Alert>
              ),
            });
        }}
      >
        <IoArrowRedoSharp />
      </Button>
    </Flex>
  );
};

export default NewFeedBack;
