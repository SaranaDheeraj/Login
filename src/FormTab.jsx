import {
  Box,
  Heading,
  Image,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const FormTab = () => {
  const [email, setEmail] = useState("valentinaalva@gmail.com"); // State to manage the email input value
  const [password, setPassword] = useState(""); // State to manage the password input value
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [rememberMe, setRememberMe] = useState(false); // State to track "Remember Me" checkbox
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validity

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Validate email format
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValid);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // e.g., Send data to server or validate inputs
    console.log("Submitting with email:", email, "and password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <Box mt="50px">
      <Image width="25%" src="company.jpg" />
      <Heading mt={4}>Welcome Back</Heading>
      <Text mt={3} fontWeight="bold" fontSize="sm">
        Enter your email and password to access your account
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              size="md"
              variant="ghost"
              border="1px solid gray"
              value={email}
              onChange={handleEmailChange}
              isRequired
              isInvalid={!isEmailValid && email.length > 0}
            />
            {isEmailValid && (
              <InputRightElement width="4.5rem">
                <Box
                  width="1.25rem"
                  height="1.25rem"
                  borderRadius="50%"
                  bg="green.400"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="0.75rem"
                >
                  ✓
                </Box>
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              size="md"
              variant="ghost"
              border="1px solid gray"
              value={password}
              onChange={handlePasswordChange}
              isRequired
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleTogglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                variant="ghost"
                colorScheme="gray"
                leftIcon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box mt={4} display="flex" alignItems="center">
          <Checkbox
            isChecked={rememberMe}
            onChange={handleRememberMeChange}
            colorScheme="blue"
          >
            Remember Me
          </Checkbox>
          <Box ml="auto">
            <Link
              color="blue.400"
              onClick={() => alert("Reset password link clicked")}
            >
              Forgot password?
            </Link>
          </Box>
        </Box>
        <Box mt={4}>
          <Button width="100%" type="submit" colorScheme="blue">
            Sign In
          </Button>
        </Box>
        <Text mt={4} textAlign="center">
          Don't have an account?{" "}
          <Link color="blue.400" onClick={() => alert("Sign up link clicked")}>
            Sign up now
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default FormTab;
