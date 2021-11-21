import React from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const property = {
  rating: 5,
};
const CarFeedBack = () => {
  return (
    <Box align="start" my="2">
      <Box>
        <Flex>
          <Box>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              mr="3"
            />
          </Box>
          <Box>
            <Text>Thanh Tu</Text>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Text>Xe chạy êm, đẹp</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CarFeedBack;
