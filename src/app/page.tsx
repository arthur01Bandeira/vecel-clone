import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Box bg="black" color="white" minH="100vh" overflowX="hidden">
      <Navbar />
      <Hero />
    </Box>
  );
}