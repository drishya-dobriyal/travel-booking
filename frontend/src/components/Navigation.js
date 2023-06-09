import { List, ListItem, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Box bg="gray.200" p={4}>
      <List display="flex" justifyContent="center" alignItems="center">
        <ListItem mx={2}>
          <Link
            as={RouterLink}
            to="/"
            color="teal.500"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "teal.900" }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem mx={2}>
          <Link
            as={RouterLink}
            to="/booking-form"
            color="teal.500"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "teal.900" }}
          >
            Booking Form
          </Link>
        </ListItem>
        <ListItem mx={2}>
          <Link
            as={RouterLink}
            to="/booking-details"
            color="teal.500"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "teal.900" }}
          >
            Booking Details
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
