import { Box } from "@chakra-ui/react";

export default function HeroGrid() {
  const columns = 12;
  const rows = 8;
  const cells = Array.from({ length: columns * rows });

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      borderRadius="full"
      zIndex={0}
    >
      <Box
        position="absolute"
        inset="0"
        bg={`
          radial-gradient(circle at 42% 56%, rgba(0, 140, 255, 0.30), transparent 30%),
          radial-gradient(circle at 42% 34%, rgba(0, 255, 255, 0.20), transparent 28%),
          radial-gradient(circle at 58% 34%, rgba(255, 210, 0, 0.22), transparent 28%),
          radial-gradient(circle at 58% 56%, rgba(255, 70, 70, 0.24), transparent 30%)
        `}
        filter="blur(36px)"
        opacity={0.95}
      />

      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(circle at center, rgba(255,255,255,0.04), rgba(255,255,255,0) 55%)"
      />

      <Box
        position="absolute"
        inset="0"
        display="grid"
        gridTemplateColumns={`repeat(${columns}, 1fr)`}
        gridTemplateRows={`repeat(${rows}, 1fr)`}
      >
        {cells.map((_, index) => (
          <Box
            key={index}
            borderRight="1px solid rgba(255,255,255,0.08)"
            borderBottom="1px solid rgba(255,255,255,0.08)"
          />
        ))}
      </Box>
    </Box>
  );
}