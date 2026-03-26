import { Text, VStack } from "@chakra-ui/react";

export default function Category({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <VStack align="start" gap={3} p={3}>
      <Text fontSize="xs" color="whiteAlpha.600" textTransform="none">
        {title}
      </Text>
      {children}
    </VStack>
  );
}