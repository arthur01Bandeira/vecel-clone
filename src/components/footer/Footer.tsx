"use client";

import NextLink from "next/link";
import {
  Box,
  Flex,
  Link,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Select,
  Button,
  
} from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

type FooterLinkItem = {
  label: string;
  href: string;
  isNew?: boolean;
  icon?: React.ReactNode;
};

type FooterColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      bg="black"
      color="white"
      borderTop="1px solid rgba(255,255,255,0.08)"
      px={6}
      py={{ base: 14, md: 20 }}
    >
      <Flex justify="center" w="100%">
        <Box w="100%" maxW="1200px">
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 6 }} gap={8}>
            <FooterColumn
              title="Get Started"
              links={[
                { label: "Templates", href: "/templates" },
                { label: "Supported frameworks", href: "/docs/frameworks" },
                { label: "Marketplace", href: "/marketplace" },
                { label: "Domains", href: "/domains" },
              ]}
            />

            <FooterColumn
              title="Build"
              links={[
                { label: "Next.js on Vercel", href: "/frameworks/nextjs" },
                { label: "Turborepo", href: "/solutions/turborepo" },
                { label: "v0", href: "/v0.app" },
              ]}
            />

            <FooterColumn
              title="Scale"
              links={[
                { label: "Content delivery network", href: "/cdn" },
                { label: "Fluid compute", href: "/fluid" },
                { label: "CI/CD", href: "/products/previews" },
                { label: "Observability", href: "/productss/observability" },
                { label: "AI Gateway", href: "/ai-gateway", isNew: true},
                {label: "Vercel Agent", href:"agent", isNew: true}
              ]}
            />

            <FooterColumn
              title="Secure"
              links={[
                { label: "Platform security", href: "/security" },
                { label: "Web Application Firewall", href: "/security/web-aplication-firewall" },
                { label: "Bot management", href: "/security/bot-management" },
                { label: "BotID", href: "/botid" },
                { label: "Sandbox", href: "/sandbox", isNew: true },
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                { label: "Pricing", href: "/pricing" },
                { label: "Customers", href: "/customers" },
                { label: "Enterprise", href: "/enterprise" },
                { label: "Articles", href: "/i" },
                { label: "Startups", href: "/startups" },
                { label: "Solution partners", href: "/partners/solution-partners" },
              ]}
            />

            <FooterColumn
              title="Learn"
              links={[
                { label: "Docs", href: "/docs" },
                { label: "Blog", href: "/blog" },
                { label: "Changelog", href: "/changelog" },
                { label: "Knowledge Base", href: "/kb" },
                { label: "Academy", href: "/academy" },
                { label: "Community", href: "/community.vercel.com" },
              ]}
            />

            <FooterColumn
              title="Frameworks"
              links={[
                { label: "Next.js", href: "/frameworks/nextjs" },
                { label: "Nuxt", href: "docs/frameworks/full-stack/nuxt" },
                { label: "Svelte", href: "docs/frameworks/full-stack/sveltekit" },
                { label: "Nitro", href: "/frameworks/backend/nitro" },
                { label: "Turbo", href: "/solutions/turborepo" },
              ]}
            />

            <FooterColumn
              title="SDKs"
              links={[
                { label: "AI SDK", href: "/ai-sdk.dev" },
                { label: "Workflow DevKit", href: "/useworkflow.dev", isNew: true },
                { label: "Flags SDK", href: "/flags-sdk.dev" },
                { label: "Chat SDK", href: "/chat-sdk.dev" },
                { label: "Streamdown AI", href: "/streamdown.ai", isNew: true },
              ]}
            />

            <FooterColumn
              title="Use Cases"
              links={[
                { label: "Composable commerce", href: "/solutions/composable-commerce" },
                { label: "Multi-tenant platforms", href: "/solutions/multi-tenant-saas" },
                { label: "Web apps", href: "/solutions/web-apps" },
                { label: "Marketing sites", href: "/solutions/marketing-sites" },
                { label: "Platform engineers", href: "/solutions/platform-engineers" },
                { label: "Design engineers", href: "/solutions/design-engineers" },
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Help", href: "/help" },
                { label: "Press", href: "/press" },
                {label: "Legal", href: "/legal"},
                {label: "Privacy Policy", href: "/legal/privacy-police"},
              ]}
            />

            <FooterColumn
              title="Community"
              links={[
                { label: "Open source program", href: "open-source-program" },
                { label: "Events", href: "/events" },
                { label: "Shipped on Vercel", href: "/shipped" },
                { label: "GitHub", href: "/github.com/vercel", icon: <FiGithub /> },
                { label: "LinkedIn", href: "/linkedin.com/company/vercel", icon: <FiLinkedin /> },
                { label: "X", href: "/x.com/vercel", icon: <FaXTwitter /> },
                { label: "YouTube", href: "/youtube.com/@VercelHQ", icon: <FiYoutube /> },
              ]}
            />
            <FooterColumn 
            title=" "
            links={[{
              label: "  ",
              href: "/home",              
              icon: <svg width="20" height="20"viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/></svg>}]}
            
            />
          </SimpleGrid>

          <Flex
            mt={16}
            pt={6}
            borderTop="1px solid rgba(255,255,255,0.08)"
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "start", md: "center" }}
            gap={6}
          >
            <Text fontSize="sm" color="whiteAlpha.600">
              No status available.
            </Text>

                    <VStack align="start" gap={2}>
            <Text fontSize="sm" color="whiteAlpha.700">
              Select a display theme:
            </Text>

            <HStack gap={2} flexWrap="wrap">
              <Button
                size="sm"
                h="36px"
                px={4}
                borderRadius="18px"
                bg="whiteAlpha.200"
                color="white"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                system
              </Button>

              <Button
                size="sm"
                h="36px"
                px={4}
                borderRadius="18px"
                variant="outline"
                borderColor="whiteAlpha.200"
                color="whiteAlpha.800"
                _hover={{ bg: "whiteAlpha.100", color: "white" }}
              >
                dark
              </Button>

              <Button
                size="sm"
                h="36px"
                px={4}
                borderRadius="18px"
                variant="outline"
                borderColor="whiteAlpha.200"
                color="whiteAlpha.800"
                _hover={{ bg: "whiteAlpha.100", color: "white" }}
              >
                light
              </Button>
            </HStack>
          </VStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <VStack align="start" gap={4}>
      <Text fontSize="sm" fontWeight="bold" color="white">
        {title}
      </Text>

      <VStack align="start" gap={3}>
        {links.map((link) => (
          <NextLink key={link.label} href={link.href} passHref legacyBehavior>
            <Link
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <HStack gap={2} align="center">
                {link.icon && <Box display="flex">{link.icon}</Box>}
                <Text>{link.label}</Text>
                {link.isNew && (
                  <Badge
                    fontSize="0.65rem"
                    px={1.5}
                    py={0.5}
                    borderRadius="6px"
                    bg="whiteAlpha.200"
                    color="white"
                  >
                    New
                  </Badge>
                )}
              </HStack>
            </Link>
          </NextLink>
        ))}
      </VStack>
    </VStack>
  );
}

