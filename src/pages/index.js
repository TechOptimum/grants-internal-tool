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
import { FaBook, FaCheck, FaDatabase } from "react-icons/fa";

const ToolCard = ({ title, link, description, icon }) => {
  return (
    <Box color="primary">
      <Link _hover={{
            textDecoration: "none",

        
      }} href={link}>
        <Flex
         transition=".2s"
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          _hover={{
            boxShadow: "sm",
          }}
          rounded={"md"}
          p={6}
          textAlign={"center"}
          align={"center"}
          justify={"center"}
          direction={"column"}
        >
          <Icon as={icon} w={24} h={24} />
          <Text mt="1rem" fontSize={"xl"} fontWeight={600}>
            {title}
          </Text>
          <Text color={"gray.500"}>{description}</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <Box
        mx="auto"
        justify="center"
        alignItems={"center"}
        justifyContent="center"
        my="8rem"
        w="80%"
      >
        <Heading color="primary">Grant Writing Portal Home</Heading>
        <Text pt={"1rem"} fontSize="xl" color="gray.500">
          Welcome to the Grant Writing Portal. This portal is designed to help
          you write your grant proposal. We have a variety of tools to help you
          write your proposal. Please select a tool below to get started.
        </Text>
        <SimpleGrid columns={3} spacing={10} my="2rem">
          <ToolCard
            title="Grant Writing Guide"
            link="/grant-writing-guide"
            description="A guide to help you write your grant proposal."
            icon={FaBook}
          />
          <ToolCard
            title="Grant Writing Checklist"
            link="/grant-writing-checklist"
            description="A checklist to help you write your grant proposal."
            icon={FaCheck}
          />
          <ToolCard
            title="Grants Database"
            link="/grants-database"
            description="A database of grants to help you find funding."
            icon={FaDatabase}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
