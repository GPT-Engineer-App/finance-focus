import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.md">
          <Heading as="h2" size="2xl" mb={4}>Main Headline: Financial Times Inspired Design</Heading>
          <Text fontSize="lg">This is a sample headline section similar to the Financial Times. It captures the most important news of the day.</Text>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box py={10}>
        <Container maxW="container.md">
          <Heading as="h3" size="lg" mb={6}>Featured Articles</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>This is a brief summary of the first featured article. It provides a quick overview of the content.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>This is a brief summary of the second featured article. It provides a quick overview of the content.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 3</Heading>
              <Text mt={4}>This is a brief summary of the third featured article. It provides a quick overview of the content.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center" mb={4}>
            <Heading as="h1" size="lg">Financial Times</Heading>
            <HStack spacing={8}>
              <Link href="#" color="white">About</Link>
              <Link href="#" color="white">Contact</Link>
              <Link href="#" color="white">Privacy Policy</Link>
            </HStack>
          </Flex>
          <Text textAlign="center">© 2023 Financial Times. All rights reserved.</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;