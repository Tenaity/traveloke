import React from "react";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const CardRoom = ({ room }) => {
  const property = {
    imageUrl: room.images[0],
    imageAlt: "Rear view of modern home with pool",
    rooms: room.totalRooms,
    available: room.available,
    title: room.name,
    formattedPrice: "$1,900.00",
    reviewCount: room.feedbacks?.length || 0,
    rating: room.vote,
  };

  return (
    <Link to={`/room/${room._id}`}>
      <Flex>
        <Box
          w="md"
          rounded="lg"
          shadow="lg"
          cursor="pointer"
          _hover={{ shadow: "xl" }}
        >
          <Image
            src={room.images[0]}
            alt={room.imageAlt}
            roundedTop="lg"
            objectFit="cover"
            h="220px"
          />

          <Box p="5">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" colorScheme="teal">
                Giảm giá
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                ml="2"
              >
                Loại phòng {room.type}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {room.price}
              <Box as="span" color="gray.600" fontSize="sm">
                $/ ngày
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default CardRoom;
