import NextLink from "next/link";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

type ItemProps = {
  title: string;
  desc: string;
  href: string;
  icon: IconType;
};

export default function Item({ title, desc, href, icon: Icon }: ItemProps) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Flex
          role="group"
          align="flex-start"
          gap={3}
          p={3}
          borderRadius="xl"
          cursor="pointer"
          transition="0.2s ease"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          <Box
            mt="2px"
            color="whiteAlpha.700"
            transition="0.2s ease"
            _groupHover={{ color: "white" }}
          >
            <Icon size={18} />
          </Box>

          <Box>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="whiteAlpha.900"
              _groupHover={{ color: "white" }}
            >
              {title}
            </Text>
            <Text
              fontSize="xs"
              color="whiteAlpha.600"
              _groupHover={{ color: "whiteAlpha.800" }}
            >
              {desc}
            </Text>
          </Box>
        </Flex>
      </Link>
    </NextLink>
  );
}