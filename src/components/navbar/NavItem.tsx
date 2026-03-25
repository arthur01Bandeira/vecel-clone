"use client";

import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const MotionBox = motion(Box);

type NavItemProps = {
  label: string;
  setActive: (value: string) => void;
  isActive: boolean;
};

export default function NavItem({
  label,
  setActive,
  isActive,
}: NavItemProps) {
  return (
    <Flex
      align="center"
      gap={1}
      cursor="pointer"
      onMouseEnter={() => setActive(label)}
      color={isActive ? "white" : "whiteAlpha.800"}
      _hover={{ color: "white" }}
      transition="0.2s ease"
    >
      <Text fontSize="sm">{label}</Text>

      <MotionBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <FiChevronDown size={14} />
      </MotionBox>
    </Flex>
  );
}