import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

function BookingCard({ booking }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={4}
      boxShadow="md"
      maxW="600px"
      mx="auto"
      bg="white"
      mt="2"
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        mb={2}
        color="teal.500"
        textTransform="uppercase"
        letterSpacing="wide"
        textAlign="center"
      >
        {booking.name}
      </Text>
      <Text fontSize="md" mb={4} textAlign="center" color="gray.600">
        {booking.place}
      </Text>
      <Flex direction="row" mt={2} alignItems="center" justify="center">
        <Text fontSize="sm" fontWeight="bold" color="gray.500" mr={2}>
          Travellers:
        </Text>
        <Text>{booking.travellers}</Text>
        <Text fontSize="sm" fontWeight="bold" color="gray.500" mx={2}>
          Per Person Budget:
        </Text>
        <Text>{booking.per_person_cost}</Text>
        <Text fontSize="sm" fontWeight="bold" color="gray.500" mx={2}>
          Currency:
        </Text>
        <Text>{booking.currency}</Text>
      </Flex>
    </Box>
  );
}

export default BookingCard;
