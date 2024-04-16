import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Img = () => {
  return (
    <Box
      width="60%"
      backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.1), #1864ab), url('./login.jpg')`}
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="md"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      color="white"
      pb="75px"
    >
      <Box width="75%" mx="auto">
        <Image src="Call.svg" />
        <Heading fontSize="2.75rem">
          <Text as="span" fontWeight="100">
            We're About
          </Text>{" "}
          Deepening Donor Relationships.
        </Heading>
        <Flex mt={2} alignItems="center">
          <Text width="80%">
            Nimbie Connect is dedicated to building meaningful connections and
            lasting relationships between donors and their favorite nonprofit.
          </Text>
          <Image src="Email.svg" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Img;
