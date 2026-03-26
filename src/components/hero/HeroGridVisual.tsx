import { Box } from "@chakra-ui/react";

export default function HeroGridVisual() {
  const columns = 12;
  const rows = 8;

  const shouldRenderCell = (row: number, col: number) => {
    if (row === 1) return true;
    if (row >= 2 && row <= 5) return col === 1 || col === 12;
    if (row >= 6 && row <= 8) return true;
    return false;
  };

  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      zIndex={0}
      bg="black"
    >
    <Box
      position="absolute"
      inset="0"
      bg={`
        radial-gradient(circle at 50% 72%, rgba(255, 240, 120, 0.72), transparent 18%),
        radial-gradient(circle at 30% 88%, rgba(0, 110, 255, 0.92), transparent 52%),
        radial-gradient(circle at 38% 42%, rgba(0, 255, 255, 0.42), transparent 30%),
        radial-gradient(circle at 62% 42%, rgba(255, 220, 60, 0.42), transparent 30%),
        radial-gradient(circle at 70% 88%, rgba(255, 20, 20, 0.92), transparent 52%)
      `}
      filter="blur(44px)"
      opacity={1}
    />

      <Box position="absolute" inset="0">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const row = rowIndex + 1;

          return (
            <Box
              key={row}
              position="absolute"
              left="0"
              right="0"
              top={`${((row - 1) / rows) * 100}%`}
              height={`${100 / rows}%`}
            >
              {Array.from({ length: columns }).map((_, colIndex) => {
                const col = colIndex + 1;

                if (!shouldRenderCell(row, col)) return null;

                return (
                  <Box
                    key={`${row}-${col}`}
                    position="absolute"
                    left={`${((col - 1) / columns) * 100}%`}
                    top="0"
                    width={`${100 / columns}%`}
                    height="100%"
                    boxSizing="border-box"
                    border="1px solid rgba(255,255,255,0.08)"
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}