import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SmallGallery from "../components/SmallGallery";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  useColorModeValue,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  IoBusinessOutline,
  IoTrainOutline,
  IoCarSportOutline,
  IoCogOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoMoonOutline,
  IoCaretDownOutline,
  IoManOutline,
  IoReceiptOutline,
  IoTimeOutline,
  IoRestaurantOutline,
} from "react-icons/io5";
const HotelDetail = () => {
  return (
    <Box bg="gray.50" py="10">
      <Box w="6xl" mx="auto">
        <BreadcrumbMain />
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <SmallGallery />
          <Box></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HotelDetail;
