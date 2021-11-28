import React from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";
const property = {
  rating: 2,
};
const FeedBack = () => {
  return (
    <Box align="start" my="2">
      <Flex mb="30px">
        <Box>
          <Avatar
            src="https://bit.ly/dan-abramov"
            w="50px"
            h="50px"
            me="15px"
          />
        </Box>
        <Flex direction="column">
          <Text fontSize="md" fontWeight="bold">
            Michael Lewis
          </Text>
          <Box direction="row">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "yellow.300" : "gray.300"}
                />
              ))}
          </Box>
          <Text
            color="gray.500"
            fontWeight="normal"
            fontSize="md"
            mt="6px"
            mb="14px"
          >
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! I
            always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! I
            always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves!
          </Text>
          <Flex>
            <Flex align="center" color="gray.500" me="21px">
              <AiFillLike w="18px" h="18px" me="4px" cursor="pointer" />
              <Text fontSize="md">3 likes</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeedBack;
