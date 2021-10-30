import {
  GridItem,
  Text,
  Badge,
  Flex,
  Spacer,
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { AiOutlineShop } from "react-icons/ai";
const SearchItem = () => {
  return (
    <GridItem as={LinkBox}>
      <Flex>
        <Box>
          <AiOutlineShop style={{ display: "inline-block", marginLeft: -3 }} />
          <Heading
            as={Text}
            mx={2}
            display="inline-block"
            color="gray.600"
            fontSize="xs"
            fontStyle="italic"
          >
            Hotel
          </Heading>
          <Text fontSize="xs" display="inline-block">
            Muong Thanh
          </Text>
          <LinkOverlay>
            <Heading size="xs" variant="gradient-brand">
              Room Vip 310
            </Heading>
          </LinkOverlay>
        </Box>
        <Spacer />

        <Box>
          <Badge mr={2} variant="subtle" size="sm">
            <Text>200$</Text>
          </Badge>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default SearchItem;
