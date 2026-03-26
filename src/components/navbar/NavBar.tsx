"use client";

import { useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import NavItem from "./NavItem";
import Dropdown from "./Dropdown";

const MotionBox = motion(Box);

const menuOrder = ["Products", "Solutions", "Resources"];

export default function Navbar() {
  const [active, setActiveState] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);

  const activeIndex = useMemo(
    () => (active ? menuOrder.indexOf(active) : -1),
    [active]
  );

  const setActive = (next: string) => {
    const nextIndex = menuOrder.indexOf(next);

    if (activeIndex !== -1 && nextIndex !== -1) {
      setDirection(nextIndex > activeIndex ? 1 : -1);
    }

    setActiveState(next);
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      bg="rgba(0,0,0,0.65)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      zIndex="50"
      onMouseLeave={() => setActiveState(null)}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={6}
        py={3}
        align="center"
        justify="space-between"
        position="relative"
      >
        <Flex align="center" gap={10}>
          <NextLink href="/" passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Flex align="center" gap={2} cursor="pointer">
                <svg width="20" height="20"viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/></svg>
                <Text fontWeight="extrabold" fontSize="lg" color="whiteAlpha.900">
                  Vercel
                </Text>
              </Flex>
            </Link>
          </NextLink>

          <Flex align="center" gap={6}>
            <NavItem
              label="Products"
              setActive={setActive}
              isActive={active === "Products"}
            />
             <NavItem
              label="Resources"
              setActive={setActive}
              isActive={active === "Resources"}
            />
            <NavItem
              label="Solutions"
              setActive={setActive}
              isActive={active === "Solutions"}
            />


            <NextLink href="/enterprise" passHref legacyBehavior>
              <Link
                fontSize="sm"
                color="whiteAlpha.600"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                Enterprise
              </Link>
            </NextLink>

            <NextLink href="/pricing" passHref legacyBehavior>
              <Link
                fontSize="sm"
                color="whiteAlpha.600"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                Pricing
              </Link>
            </NextLink>
          </Flex>
        </Flex>

        <Flex align="flex-end" gap="8px">
          <NextLink href="/ai" passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="sm"
                h="35px"
                w="70px"
                px={4}
                borderRadius="7px"
                borderColor="whiteAlpha.200"
                bg="rgba(255,255,255,0.04)"
                color="white"
                _hover={{
                  bg: "whiteAlpha.100",
                  borderColor: "whiteAlpha.300",
                }}
              >
                Ask AI
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/login" passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                h="35px"
                w="70px"
                px={4}
                borderRadius="7px"
                borderColor="whiteAlpha.200"
                bg="rgba(255,255,255,0.04)"
                color="white"
                _hover={{
                  bg: "whiteAlpha.100",
                  borderColor: "whiteAlpha.300",
                }}
              >
                Log In
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/signup" passHref legacyBehavior>
            <Link _hover={{ textDecoration: "none" }}>
              <Button
                size="sm"
                h="35px"
                w="70px"
                px={4}
                borderRadius="7px"
                bg="white"
                color="black"
                _hover={{ bg: "gray.200" }}
              >
                Sign Up
              </Button>
            </Link>
          </NextLink>
        </Flex>

        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <MotionBox
              key={active}
              initial={{ opacity: 0, x: direction === 1 ? 5 : -1, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -1 : 5, y: 0 }}
              transition={{ duration: 0.18 }}
              position="absolute"
              top="calc(100% + 6px)"
              left="120px"
              zIndex="60"
            >
              <Dropdown active={active} />
            </MotionBox>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  );
}