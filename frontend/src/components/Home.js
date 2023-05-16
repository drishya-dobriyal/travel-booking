import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

function Home() {
  return (
    <Center mt="200">
      <Box bg="teal.500" p={8} borderRadius="lg" boxShadow="lg">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Welcome to the world of traveling
        </Text>
      </Box>
    </Center>
  );
}

export default Home;
