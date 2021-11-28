import React from "react";
import { Flex, Box, Avatar, Input } from "@chakra-ui/react";
const NewFeedBack = () => {
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
    </Flex>
  );
};

export default NewFeedBack;
