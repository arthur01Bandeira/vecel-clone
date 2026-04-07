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
import HeroTriangle from "./hero/HeroTriangle"

export default function Hero() {
  return (
    <Box bg="black" color="white" overflow="hidden">
      <HeroTop />
      <SectionDivider />
      <HeroToolsSection />
      <SectionDivider />
      <HeroEnterpriseSection />
      <SectionDivider />
      <HeroCtaSection />
    </Box>
  );
}
function SectionDivider() {
  return (
    <Flex justify="center" px={6}>
      <Box
        w="100%"
        maxW="932px"
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
  top={`${100 / 8}%`}
  left={`${100 / 12}%`}
  width={`${(10 / 12) * 100}%`}
  height={`${(4 / 8) * 100}%`}
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
          top={{ base: "65px", md: "65px" }}
          left="50%"
          transform="translateX(-50%)"
          zIndex={1}
          pointerEvents="none"
          display="flex"
          justifyContent="center"
          w="140%"
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

function HeroCtaSection() {
  return (
    <Flex justify="center" px={6}>
      <Box
        w="100%"
        maxW="934.4px"
        minH={{ base: "300px", md: "220px" }}
        position="relative"
        borderLeft="1px solid rgba(255,255,255,0.08)"
        borderRight="1px solid rgba(255,255,255,0.08)"
      >

        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="33.333%"
          borderLeft="1px dashed rgba(255,255,255,0.12)"
          pointerEvents="none"
          zIndex={1}
        />
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="66.666%"
          borderLeft="1px dashed rgba(255,255,255,0.12)"
          pointerEvents="none"
          zIndex={1}
        />

        <Flex
          direction={{ base: "column", lg: "row" }}
          w="100%"
          minH={{ base: "300px", md: "220px" }}
          position="relative"
          zIndex={2}
        >
          <Box
            flex={{ base: "1", lg: "0 0 66.666%" }}
            px={{ base: 6, md: 10 }}
            py={{ base: 8, md: 10 }}
            position="relative"
          >
            <VStack align="start" gap={6} w="100%">
              <Box
                position="relative"
                w={{ base: "100%", lg: "78%" }}
                minW="0"
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight="1.35"
                  letterSpacing="-0.02em"
                >
                  <Text as="span" fontWeight="bold" color="white">
                    Ready to deploy?
                  </Text>{" "}
                  <Text as="span" color="whiteAlpha.700">
                    Start building with a free account.
                  </Text>
                  <br />
                  <Text as="span" color="whiteAlpha.700">
                    Speak to an expert for your{" "}
                  </Text>
                  <Text as="span" color="cyan.300" fontWeight="bold">
                    Pro
                  </Text>
                  <Text as="span" color="whiteAlpha.700">
                    {" "}or{" "}
                  </Text>
                  <Text as="span" color="purple.400" fontWeight="bold">
                    Enterprise
                  </Text>
                  <Text as="span" color="whiteAlpha.700">
                    {" "}needs.
                  </Text>
                </Text>
              </Box>

              <HStack gap={4} flexWrap="wrap">
                <NextLink href="/new" passHref legacyBehavior>
                  <Link _hover={{ textDecoration: "none" }}>
                    <Button
                      bg="white"
                      color="black"
                      borderRadius="full"
                      px={6}
                      h="48px"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ bg: "gray.200" }}
                    >
                      Start deployment
                    </Button>
                  </Link>
                </NextLink>

                <NextLink href="/contact/sales" passHref legacyBehavior>
                  <Link _hover={{ textDecoration: "none" }}>
                    <Button
                      variant="outline"
                      color="white"
                      borderColor="whiteAlpha.300"
                      bg="rgba(255,255,255,0.04)"
                      borderRadius="full"
                      px={6}
                      h="48px"
                      fontSize="sm"
                      fontWeight="medium"
                      _hover={{ bg: "whiteAlpha.100" }}
                    >
                      Talk to an expert
                    </Button>
                  </Link>
                </NextLink>
              </HStack>
            </VStack>
          </Box>

          <Box
            flex={{ base: "1", lg: "0 0 33.333%" }}
            px={{ base: 6, md: 10 }}
            py={{ base: 8, md: 10 }}
          >
            <VStack align="start" gap={6} h="100%" justify="space-between">
              <Box>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.6"
                  letterSpacing="-0.01em"
                >
                  <Text as="span" fontWeight="bold" color="white">
                    Explore Vercel Enterprise
                  </Text>
                  <Text as="span" color="whiteAlpha.700">
                    {" "}with
                  </Text>
                  <br />
                  <Text as="span" color="whiteAlpha.700">
                    an interactive product tour,
                  </Text>
                  <br />
                  <Text as="span" color="whiteAlpha.700">
                    trial, or a personalized demo.
                  </Text>
                </Text>
              </Box>

              <NextLink href="/enterprise" passHref legacyBehavior>
                <Link _hover={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.300"
                    bg="rgba(255,255,255,0.04)"
                    borderRadius="full"
                    px={6}
                    h="48px"
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{ bg: "whiteAlpha.100" }}
                  >
                    Explore enterprise
                  </Button>
                </Link>
              </NextLink>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

function CtaCell({
  children,
  showRightDivider = false,
  hideButtonsArea = false,
}: {
  children?: React.ReactNode;
  showRightDivider?: boolean;
  hideButtonsArea?: boolean;
}) {
  return (
    <Box
      flex="1"
      position="relative"
      px={{ base: 6, md: 10 }}
      py={{ base: 8, md: 10 }}
      minH={{ base: "220px", md: "220px" }}
    >
      {showRightDivider && (
        <Box
          position="absolute"
          top="0"
          right="0"
          w="1px"
          h="100%"
          bg="rgba(255,255,255,0.08)"
          opacity={0.8}
        />
      )}

      {!hideButtonsArea && (
        <Box
          position="absolute"
          left="0"
          right="0"
          top="0"
          height="58%"
          pointerEvents="none"
        />
      )}

      {children}
    </Box>
  );
}