import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Input,
  Button,
  Select,
  useToast,
  Box,
} from "@chakra-ui/react";

function CreateBookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [per_person_cost, setPerPersonCost] = useState(10000);
  const [currency, setCurrency] = useState("USD");

  const [error, setError] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !place || currency !== "USD") {
      setError(
        "Please enter both name and email, choose a place, and use USD currency"
      );
      return;
    }
    try {
      async function createBooking() {
        const response = await fetch("/api/create-booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        console.log(data);
        if (data.status === "Failed") {
          setError(data.message);
        } else {
          toast({
            position: "top-left",
            title: "Booking Created",
            description: "Your booking is done.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setName("");
          setCurrency("USD");
          setEmail("");
          setPerPersonCost(10000);
          setPlace("");
          setTravellers(1);
        }
      }
      const body = {
        name,
        email,
        place,
        travellers,
        per_person_cost,
        currency,
      };
      createBooking(body);
    } catch (error) {
      console.error(error);
    }
  }

  function clearError() {
    setError("");
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      maxWidth="700px"
      margin="auto"
    >
      <FormControl isInvalid={!!error}>
        <FormLabel color="teal.500" fontSize="xl">
          Name
        </FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onClick={clearError}
          size="lg"
        />

        <FormLabel color="teal.500" fontSize="xl">
          Email
        </FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={clearError}
          size="lg"
        />

        <FormLabel color="teal.500" fontSize="xl">
          Select Place
        </FormLabel>
        <Select
          placeholder="Select option"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onClick={clearError}
          size="lg"
        >
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </Select>
        <Flex>
          <Flex direction="column" mr={4}>
            <FormLabel color="teal.500" fontSize="xl">
              Travellers
            </FormLabel>
            <Input
              type="number"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              onClick={clearError}
              size="lg"
            ></Input>
          </Flex>
          <Flex direction="column" mr={4}>
            <FormLabel color="teal.500" fontSize="xl">
              Per Person Budget
            </FormLabel>
            <Input
              onClick={clearError}
              size="lg"
              value={per_person_cost}
              onChange={(e) => setPerPersonCost(e.target.value)}
            ></Input>
          </Flex>
          <Flex direction="column">
            <FormLabel color="teal.500" fontSize="xl">
              Currency
            </FormLabel>
            <Input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              onClick={clearError}
              size="lg"
            />
          </Flex>
        </Flex>

        <FormErrorMessage color="red.500" mt={2} fontSize="lg">
          {error}
        </FormErrorMessage>
        <Button type="submit" colorScheme="teal" size="lg" mt={4}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default CreateBookingForm;
