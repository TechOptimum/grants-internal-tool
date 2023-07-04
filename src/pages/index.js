import Head from "next/head";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Stack,
  Image,
  Link,
  SimpleGrid,
  GridItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        mx="auto"
        justify="center"
        alignItems={"center"}
        justifyContent="center"
        my="5rem"
      >
        <Heading color="primary">Tech Optimum Grant Writing Portal</Heading>
      </Box>
    </>
  );
}
