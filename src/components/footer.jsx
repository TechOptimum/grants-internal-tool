import React, { useState } from "react";
import {
  Flex,
  Text,
  Input,
  Heading,
  Button,
  Box,
  Divider,
  Icon,
  useMediaQuery,
  useToast,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.tiktok.com/@techoptimum", icon: FaTiktok },
  { href: "https://twitter.com/TechOptimumHQ", icon: FaTwitter },
  { href: "https://www.instagram.com/techoptimum_", icon: FaInstagram },
  { href: "https://www.linkedin.com/company/techoptimum", icon: FaLinkedin },
  { href: "/discord", icon: FaDiscord },
  { href: "https://github.com/TechOptimum", icon: FaGithub },
  { href: "https://www.youtube.com/@techoptimum", icon: FaYoutube },
];

const footerLinks = [
  {
    section: "GRANT WRITING",
    links: [
      { href: "./about", text: "The Team" },
      { href: "./contact", text: "Contact" },
      { href: "./faq", text: "Frequently Asked Questions" },
    ],
  },
  {
    section: "COMPANY",
    links: [
      {
        href: "https://dashboard.techoptimum.org",
        text: "Intro to Python",
        isExternal: true,
      },
      {
        href: "https://dashboard.techoptimum.org",
        text: "Intro to Web Development",
        isExternal: true,
      },
      {
        href: "https://dashboard.techoptimum.org",
        text: "Intro to SQL",
        isExternal: true,
      },
    ],
  },

  
];

const FooterSection = ({ heading, links }) => (
  <Flex
    direction={"column"}
    h="130px"
    justifyContent="space-between"
    ml="2rem"
    
  >
    <Heading fontSize="md">{heading}</Heading>
    {links.map(({ href, text }, idx) => (
      <FooterLink key={idx} href={href}>
        {text}
      </FooterLink>
    ))}
  </Flex>
);

const FooterLink = ({ href, children }) => (
  <Link
    color="whiteAlpha.700"
    _hover={{
      color: "whiteAlpha.900",
    }}
    fontSize="md"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Reset loading state when the operation is finished
    }
  };

  let [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Flex
        transition="300ms"
        bg="blue.600"
        justifyContent="center"
        alignItems={{ base: "center", md: "center" }}
        padding="40px 12% "
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0px" }}
      >
      
       
        {footerLinks.map(({ section, links }, idx) => (
          <React.Fragment key={idx}>
            <Divider width={{ base: 80, md: 0 }} />
            <FooterSection heading={section} links={links} />
          </React.Fragment>
        ))}
      </Flex>

      <Box bg="blue.600" py={["0", "1rem"]}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding={isLargerThan600 ? "15px 5%" : "15px 12%"}
          direction={{ base: "column", md: "row" }}
          fontSize="sm"
        >
          <Flex direction={["column", "row"]} alignItems="center">
            <Text color="white">© 2023 Tech Optimum, &nbsp;</Text>
            <Text display={"flex"} color="white">
              501(c)3, EIN: 88-3677650, &nbsp;
            </Text>
            <Text color="white">
              <Link href="/privacy">Privacy Policy</Link>
            </Text>
          </Flex>
          <Wrap
            my={["2rem", "0"]}
            spacing={["16px", "24px"]}
            color="whiteAlpha.700"
            justify="center"
          >
            {socialLinks.map(({ href, icon }, idx) => (
              <Link
                isExternal
                _hover={{
                  textDecoration: "none",
                }}
                href={href}
                key={idx}
              >
                <WrapItem>
                  <Icon
                    transition="200ms"
                    _hover={{
                      color: "white",
                    }}
                    as={icon}
                    boxSize={"24px"}
                  />
                </WrapItem>
              </Link>
            ))}
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}
