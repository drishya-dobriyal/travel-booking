import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Box, ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import CreateBookingForm from "./components/CreateBookingForm";
import BookingDetails from "./components/BookingDetails";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/booking-form"
              element={<CreateBookingForm />}
            ></Route>
            <Route path="/booking-details" element={<BookingDetails />}></Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
