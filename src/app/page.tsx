import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/NavBar";

export default function Home() {
  return (
    <Box bg="black" color="white" minH="100vh" overflowX="hidden">
      <Navbar />
    </Box>
  );
}