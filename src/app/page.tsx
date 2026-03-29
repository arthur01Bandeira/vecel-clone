import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <Box bg="black" color="white" minH="100vh" overflowX="hidden">
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
}