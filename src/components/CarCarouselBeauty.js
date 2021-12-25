import React, { useState, useEffect } from "react";
import { Flex, Box, Image, Stack } from "@chakra-ui/react";
const CarCarouselBeauty = ({ imageCover, listImage }) => {
  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    setCurrentImage(imageCover);
  }, [imageCover]);
  return (
    <Flex
      direction="column"
      me={{ lg: "70px", xl: "120px" }}
      mb={{ sm: "24px", lg: "0px" }}
    >
      <Box
        w={{ sm: "275px", md: "670px", lg: "450px", xl: "550px" }}
        h={{ sm: "200px", md: "500px", lg: "330px", xl: "500px" }}
        mb="26px"
        mx={{ sm: "auto", lg: "0px" }}
      >
        <Image src={currentImage} w="100%" h="100%" borderRadius="15px" />
      </Box>
      <Stack
        direction="row"
        spacing={{ sm: "20px", md: "35px", lg: "20px" }}
        mx="auto"
        mb={{ sm: "24px", lg: "0px" }}
      >
        {listImage &&
          listImage.map((i, index) => {
            return (
              <Box
                key={index}
                w={{ sm: "36px", md: "90px", lg: "60px" }}
                h={{ sm: "36px", md: "90px", lg: "60px" }}
              >
                <Image
                  src={i}
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                  cursor="pointer"
                  onClick={(e) => setCurrentImage(e.target.src)}
                />
              </Box>
            );
          })}
      </Stack>
    </Flex>
  );
};

export default CarCarouselBeauty;
