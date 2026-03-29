"use client";

import NextLink from "next/link";
import { LuGitMerge, LuShield } from "react-icons/lu";
import { RxCode } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {
  Link as ChakraLink,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import HeroGridVisual from "./hero/HeroGridVisual";
import HeroTriangle from "./hero/HeroTriangle";

export default function Hero() {
  return (
    <Box bg="black" color="white" overflow="hidden">
      <HeroTop />
      <SectionDivider />
      <HeroToolsSection />
      <SectionDivider />
      <HeroEnterpriseSection />
    </Box>
  );
}
function SectionDivider() {
  return (
    <Flex justify="center" px={6}>
      <Box
        w="100%"
        maxW="1038.4px"
        borderTop="1px solid rgba(255,255,255,0.08)"
      />
    </Flex>
  );
}

function HeroTop() {
  return (
    <Flex
      direction="column"
      align="center"
      px={6}
      pt={{ base: "96px", md: "112px" }}
      pb="0"
    >
      <Box
        position="relative"
        w="100%"
        maxW="934.4px"
        h={{ base: "720px", md: "820px" }}
      >
        <Box
          position="absolute"
          inset="0"
          zIndex={0}
        >
          <HeroGridVisual />
        </Box>

        <Flex
          position="absolute"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          w="100%"
          maxW="836.75px"
          h={{ base: "320px", md: "334.1px" }}
          zIndex={2}
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          px={{ base: 6, md: 10 }}
        >
          <VStack gap={{ base: 4, md: 6 }} maxW="788.75px">
            <Text
              fontSize="5xl"
              fontWeight="semibold"
              lineHeight={{ base: "1.05", md: "1" }}
              letterSpacing="-0.05em"
            >
              Build and deploy on the AI Cloud.
            </Text>

            <Text
              maxW="540px"
              color="whiteAlpha.700"
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight="1.6"
            >
              Vercel provides the developer tools and cloud infrastructure
              to build, scale, and secure a faster, more personalized web.
            </Text>

            <HStack gap={4} flexWrap="wrap" justify="center" pt={1}>
              <NextLink href="/new">
                <Link _hover={{ textDecoration: "none" }}>
                  <Button
                    bg="white"
                    color="black"
                    borderRadius="full"
                    px={7}
                    h="40px"
                    minW="181px"
                    fontSize="sm"
                    fontWeight="semibold"
                    _hover={{ bg: "gray.300" }}
                  >
                    Start Deploying
                  </Button>
                </Link>
              </NextLink>

              <NextLink href="/contact/sales">
                <Link _hover={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.300"
                    bg="blackAlpha.800"
                    borderRadius="full"
                    px={7}
                    h="40px"
                    minW="181px"
                    fontSize="sm"
                    fontWeight="semibold"
                    _hover={{
                      bg: "whiteAlpha.100",
                      borderColor: "whiteAlpha.400",
                    }}
                  >
                    Get a Demo
                  </Button>
                </Link>
              </NextLink>
            </HStack>
          </VStack>
        </Flex>

        <Box
          position="absolute"
          top={{ base: "80px", md: "80px" }}
          left="50%"
          transform="translateX(-50%)"
          zIndex={1}
          pointerEvents="none"
          display="flex"
          justifyContent="center"
          w="100%"
        >
          <HeroTriangle />
        </Box>
      </Box>
    </Flex>
  );
}


function HeroToolsSection() {
  return (
    <Flex justify="center" px={6}>
      <Box
        w="100%"
        maxW="934.4px"
        minH={{ base: "220px", md: "258px" }}
        borderLeft="1px solid rgba(255,255,255,0.08)"
        borderRight="1px solid rgba(255,255,255,0.08)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
        py={{ base: 12, md: 16 }}
      >
        <Box maxW="980px" textAlign="center">
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
            lineHeight={{ base: "1.3", md: "1.2" }}
            letterSpacing="-0.03em"
          >
            Develop with your favorite tools <Icon verticalAlign="middle"><RxCode /></Icon>
            <br />
            Launch globally, instantly <Icon verticalAlign="middle"><TbWorld /></Icon>{" "}
            Keep pushing <Icon verticalAlign="middle"><LuGitMerge /></Icon>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

function HeroEnterpriseSection() {
  return (
    <Flex justify="center" px={6}>
      <Box
        w="100%"
        maxW="934.4px"
        minH={{ base: "120px", md: "129px" }}
        borderLeft="1px solid rgba(255,255,255,0.08)"
        borderRight="1px solid rgba(255,255,255,0.08)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
        py={{ base: 8, md: 10 }}
      >
        <Flex
          maxW="100%"
          align="center"
          justify="center"
          gap={3}
          textAlign="center"
          flexWrap="nowrap"
        >
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
            lineHeight="1.1"
            letterSpacing="-0.04em"
            whiteSpace="nowrap"
          >
            Scale your
          </Text>

          <ChakraLink
            as={NextLink}
            href="/enterprise"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size="sm"
              h="40px"
              px={4}
              borderRadius="20px"
              bg="whiteAlpha.100"
              color="white"
              _hover={{ bg: "gray.700" }}
            >
              <Icon mr={2}><HiOutlineBuildingOffice2 /></Icon>
              enterprise
            </Button>
          </ChakraLink>

          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
            lineHeight="1.1"
            letterSpacing="-0.04em"
            whiteSpace="nowrap"
          >
            without compromising
          </Text>

          <ChakraLink
            as={NextLink}
            href="/security"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size="sm"
              h="40px"
              px={4}
              borderRadius="20px"
              bg="whiteAlpha.100"
              color="white"
              _hover={{ bg: "gray.700" }}
            >
              <Icon mr={2}><LuShield /></Icon>
              security
            </Button>
          </ChakraLink>
        </Flex>
      </Box>
    </Flex>
  );
}

