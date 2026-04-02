import { Box } from "@chakra-ui/react";

export default function HeroTriangle() {
  return (
    <Box
      w={{ base: "800px", md: "1000px", lg: "1200px" }}
      opacity={0.96}
    >
      <svg
        aria-label="Vercel triangle"
        viewBox="0 0 1200 700"
        style={{ width: "100%", height: "auto", display: "block" }}
        fill="none"
      >
        <path fill="black" d="M485 650.4h230L600 451.21z" />
        <path stroke="rgba(255,255,255,1)" d="M715 650.4 L600 451.21 L485 650.4" />
        <path stroke="rgba(255,255,255,0.93)" d="M715 650.4 L600 460.33 L485 650.4" />
        <path stroke="rgba(255,255,255,0.87)" d="M715 650.4 L600 469.44 L485 650.4" />
        <path stroke="rgba(255,255,255,0.8)" d="M715 650.4 L600 478.56 L485 650.4" />
        <path stroke="rgba(255,255,255,0.73)" d="M715 650.4 L600 487.67 L485 650.4" />
        <path stroke="rgba(255,255,255,0.67)" d="M715 650.4 L600 496.79 L485 650.4" />
        <path stroke="rgba(255,255,255,0.6)" d="M715 650.4 L600 505.9 L485 650.4" />
        <path stroke="rgba(255,255,255,0.53)" d="M715 650.4 L600 515.02 L485 650.4" />
        <path stroke="rgba(255,255,255,0.47)" d="M715 650.4 L600 524.13 L485 650.4" />
        <path stroke="rgba(255,255,255,0.4)" d="M715 650.4 L600 533.25 L485 650.4" />
        <path stroke="rgba(255,255,255,0.33)" d="M715 650.4 L600 542.36 L485 650.4" />
        <path stroke="rgba(255,255,255,0.27)" d="M715 650.4 L600 551.48 L485 650.4" />
        <path stroke="rgba(255,255,255,0.2)" d="M715 650.4 L600 560.59 L485 650.4" />
        <path stroke="rgba(255,255,255,0.13)" d="M715 650.4 L600 569.71 L485 650.4" />
        <path stroke="rgba(255,255,255,0.07)" d="M715 650.4 L600 578.82 L485 650.4" />
      </svg>
    </Box>
  );
}