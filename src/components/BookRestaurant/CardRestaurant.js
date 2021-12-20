import React from "react";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const CardRestaurant = ({ res }) => {

  const property = {
    imageUrl: res.imageCover,
    imageAlt: "Restaurant",
    priceFrom: res.priceFrom,
    priceTo: res.priceTo,
    type: res.type,
    title: res.name,
    reviewCount: res.feedbacks?.length || 0,
    rating: res.vote,
    city: res.city,
    id: res._id,
  };

  return (
    <Link to={`/restaurant/${property.id}`}>
      <Flex>
        <Box
          w="md"
          rounded="lg"
          shadow="lg"
          cursor="pointer"
          _hover={{ shadow: "xl" }}
        >
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            roundedTop="lg"
            objectFit="cover"
            h="220px"
            w="100%"
          />

          <Box p="5">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" colorScheme="teal">
                {property.city}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.priceFrom}-{property.priceTo} &bull; {property.type}
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

            {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default CardRestaurant;
