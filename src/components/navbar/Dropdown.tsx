import { Box } from "@chakra-ui/react";
import Products from "./dropdowns/Products";
import Solutions from "./dropdowns/Solutions";
import Resources from "./dropdowns/Resources";

export default function Dropdown({ active }: { active: string }) {
  return (
    <Box
      bg="rgba(10,10,10,0.98)"
      border="1px solid rgba(255,255,255,0.1)"
      borderRadius="2xl"
      p={6}
      w="920px"
      boxShadow="0 20px 60px rgba(0,0,0,0.45)"
    >
      {active === "Products" && <Products />}
      {active === "Solutions" && <Solutions />}
      {active === "Resources" && <Resources />}
    </Box>
  );
}