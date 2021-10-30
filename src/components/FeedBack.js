import React from "react";
import {
  Box,
  Text,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const property = {
    rating: 2,
  };
const FeedBack = () => {
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
                            <Text>Vo Muoi</Text>
                            {Array(5)
                              .fill("")
                              .map((_, i) => (
                                <StarIcon
                                  key={i}
                                  color={
                                    i < property.rating
                                      ? "teal.500"
                                      : "gray.300"
                                  }
                                />
                              ))}
                            <Text>Phòng rộng rãi thoáng mát</Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
    )
}

export default FeedBack
