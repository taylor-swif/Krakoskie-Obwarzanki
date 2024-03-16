import {
  Box,
  Heading,
  Text,
  Collapse,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Widget() {
  const [show, setShow] = useState(false);
  const [loginFromActive, setLoginFormActive] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleLoginFormToggle = () => setLoginFormActive(!loginFromActive);
  return (
    <Box
      position="absolute"
      left="50px"
      top="100px"
      w="350px"
      h="100px"
      zIndex={1000}
      bg="white"
      p="5"
      borderWidth="4px"
    >
      <Flex justify="space-between" align="center">
        <Heading as="h2" size="md">
          Przykładowy div
        </Heading>
        <Flex>
          <IconButton
            aria-label="User icon"
            onClick={handleLoginFormToggle}
            icon={<FaUser />}
          />
          <Button onClick={handleToggle} mt="1rem">
            {show ? "Zamknij" : "Otwórz"}
          </Button>
        </Flex>
      </Flex>
      <Collapse in={show}>{loginFromActive ? <LoginForm /> : <></>}</Collapse>
    </Box>
  );
}
