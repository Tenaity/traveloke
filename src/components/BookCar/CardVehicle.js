import React from "react";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const CardVehicle = ({ vehicle }) => {
    console.log('vehicle', vehicle);

    return (
        <Link to={`/vehicle/${vehicle._id}`}>
            <Flex>
                <Box
                    w="md"
                    rounded="lg"
                    shadow="lg"
                    cursor="pointer"
                    _hover={{ shadow: "xl" }}
                >
                    <Image
                        src={vehicle.imageCover}
                        alt={"imageVehicle"}
                        roundedTop="lg"
                        objectFit="cover"
                        h="220px"
                    />

                    <Box p="5">
                        <Box d="flex" alignItems="baseline">
                            <Badge rounded="full" colorScheme="teal">
                                new
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {vehicle.type}
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {vehicle.name}
                        </Box>

                        <Box>
                            {vehicle.price}$
                            <Box as="span" color="gray.600" fontSize="sm">
                                /day
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Link>
    );
};

export default CardVehicle;
