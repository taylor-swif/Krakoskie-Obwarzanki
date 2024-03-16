import { Box, Text, Flex, Badge } from "@chakra-ui/react"; // Załóżmy, że korzystamy z Chakra UI

interface Seller {
  id: number;
  firstName: string;
  lastName: string;
  distance: number;
}

const dummySellers: Seller[] = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    distance: 5.2,
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Nowak",
    distance: 3.8,
  },
  {
    id: 3,
    firstName: "Piotr",
    lastName: "Wiśniewski",
    distance: 7.1,
  },
];

export default function PretzelList() {
  return (
    <Box maxH="400px" overflowY="auto">
      {dummySellers.map((seller, index) => (
        <Box key={index} p="4" mb="4" borderWidth="1px" borderRadius="lg">
          <Flex direction="column">
            <Flex direction="row">
              <Text fontSize="s" fontWeight="bold" marginRight={3}>
                {`${seller.firstName} ${seller.lastName}`}
              </Text>
              <Text>{`${seller.distance} km`}</Text>
            </Flex>
            <Flex direction="row">
              <Badge colorScheme="yellow" width="min" marginRight={1}>
                Ser
              </Badge>
              <Badge colorScheme="green" width="min" marginRight={1}>
                Mak
              </Badge>
              <Badge
                colorScheme="white"
                border="1px"
                width="min"
                marginRight={1}
              >
                Sól
              </Badge>
              <Badge colorScheme="pink" width="min" marginRight={1}>
                Mieszny
              </Badge>
              <Badge colorScheme="gray" width="min" marginRight={1}>
                Sezam
              </Badge>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
