import React, { useEffect, useState } from "react";
import { VStack, Text, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import BookingCard from "./BookingCard";

function BookingDetails() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async function () {
      const response = await fetch("/api/fetch-all-booking", {
        method: "GET",
      });
      const data = await response.json();
      setBookings(data.bookings);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  if (loading) {
    return (
      <VStack minHeight="200px" justifyContent="center">
        <Spinner size="lg" color="teal.500" />
        <Text mt={4}>Loading bookings...</Text>
      </VStack>
    );
  }

  if (bookings.length === 0) {
    return (
      <VStack minHeight="200px" justifyContent="center">
        <Text>No bookings available.</Text>
      </VStack>
    );
  }

  return (
    <Wrap spacing={4} justify="center">
      {bookings.map((booking) => (
        <WrapItem key={booking.id}>
          <BookingCard booking={booking} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default BookingDetails;
