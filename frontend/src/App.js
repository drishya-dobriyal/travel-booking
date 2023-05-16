import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/"></Route>
            <Route exact path="/booking-form"></Route>
            <Route path="/booking-details"></Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
