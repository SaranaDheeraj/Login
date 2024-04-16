import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";
import Img from "./Img";

const Login = () => {
  return (
    <Flex height="100vh" width="1400px" mx="auto">
      <Flex justifyContent="center" alignItems="center" width="40%">
        <Form />
      </Flex>
      <Img />
    </Flex>
  );
};

export default Login;
