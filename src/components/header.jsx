import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Heading, Button,
    Spacer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    Image,
    useBreakpointValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import { useEffect, useState } from "react";
  
  const DefaultNavItems = [
    {
      label: "Home",
      href: "/",
    },

  
   
  
  ];
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    const [NAV_ITEMS, setNAV_ITEMS] = useState(DefaultNavItems);
    /// hello
  
  
    const DesktopSubNav = ({ label, href, subLabel, image }) => {
      return (
        <Link
          href={href}
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{ bg: useColorModeValue("whiteAlpha.100", "black") }}
        >
          <Stack direction={"row"} align={"center"}>
            <Box alignItems="center" display="flex">
              <Flex direction="column">
                <Text
                  color="primary"
                  transition={"color .2s ease"}
                  _groupHover={{ color: "secondary" }}
                  fontWeight={500}
                >
                  {label}
                </Text>
                <Text
                  _groupHover={{
                    color: "gray.500",
                  }}
                  fontSize={"sm"}
                >
                  {subLabel.length > 56
                    ? `${subLabel.slice(0, 56)}...`
                    : subLabel}
                </Text>
              </Flex>
              {image && (
                <Image ml="2rem" src={image} alt={label} boxSize="50px" />
              )}
            </Box>
            <Flex
              transition={"all .2s ease"}
              transform={"translateX(-10px)"}
              opacity={0}
              _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
              justify={"flex-end"}
              align={"center"}
              flex={1}
            >
              <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      );
    };
  
    const DesktopNav = () => {
      const linkColor = useColorModeValue("primary", "gray.700");
      const linkHoverColor = useColorModeValue("blackAlpha.800", "white");
      const popoverContentBgColor = useColorModeValue(
        "white",
        "gray.800"
      );
  
      return (
        <header>
         
          <Stack alignItems="center" direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      px={2}
                      href={navItem.href ?? "#"}
                      fontSize={"m"}
                      fontWeight={500}
                      color={linkColor}
                      transitionDelay="0s"
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </PopoverTrigger>
  
                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    
                    >
                      <Stack transitionDelay="0s">
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
          
          </Stack>
        </header>
      );
    };
  
    const MobileNavItem = ({ label, children, href, image }) => {
      const { isOpen, onToggle } = useDisclosure();
  
      return (
        <Stack spacing={4} onClick={children && onToggle}>
          <Flex
            py={2}
            as={Link}
            href={href ?? "#"}
            justify={"space-between"}
            align={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            {image && <Image src={image} alt={label} boxSize="50px" />}
            <Text color={useColorModeValue("gray.900", "gray.800")}>{label}</Text>
            {children && (
              <Icon
              color="primary"
                _hover={{
                  color: "gray.400",
                  bg: "gray.900",
                }}
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
  
          <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
          >
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={"solid"}
              borderColor={useColorModeValue("primary", "primary")}
              align={"start"}
            >
              {children &&
                children.map((child) => (
                  <Link color="primary" key={child.label} py={2} href={child.href}>
                    {child.label}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      );
    };
  
    const MobileNav = () => {
      return (
        <Stack p={4} display={{ md: "none" }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
            <Button  color="black" as="a" href="https://dashboard.techoptimum.org">Dashboard</Button>
        </Stack>
      );
    };
  
    return (
      <header>
        <Box
          zIndex="100"
          className="nav-cont stroke"
          top="1.5rem !important"
          left="0"
          right="0"
          pos={"fixed"}
          mx={["1.5rem","3rem"]}
          borderRadius="lg"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
          sx={{
            backdropFilter: "blur(10px)",
          }}
        >
          <Flex
            color="black"
            py="1.1rem"
            px={["3rem", "10rem"]}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
              mr="2rem"
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
             
               
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            
  
            <Flex
              alignItems={"center"}
              flex={{ base: 1 }}
              justify={{ base: "start", md: "start" }}
            >
              <Image
                maxW="120px"
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                src="https://www.techoptimum.org/text-black-transparent-tight.png"
              />
              <Spacer />
  
              <Flex display={{ base: "none", md: "flex" }}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
          <Spacer/>
  
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </header>
    );
  }
  