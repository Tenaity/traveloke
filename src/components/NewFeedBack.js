import React from "react";
import { Flex, Box, Avatar, Input } from "@chakra-ui/react";

const NewFeedBack = (props) => {
  const { handleEnter, handleUserInput, inputValue } = props;

  return (
    <Flex alignItems="center">
      <Box>
        <Avatar src="https://bit.ly/dan-abramov" w="50px" h="50px" me="15px" />
      </Box>
      <Input
        value={inputValue}
        placeholder="Write your comment..."
        borderRadius="15px"
        _focus={{ borderColor: "teal.300" }}
        onKeyDown={(e) => handleEnter(e)}
        onChange={(e) => handleUserInput(e)}
      />
    </Flex>
  );
};

export default NewFeedBack;
