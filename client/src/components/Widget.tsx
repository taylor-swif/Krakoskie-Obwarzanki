// Widget.js
import React, { useState } from "react";
import { Box, Collapse, Flex } from "@chakra-ui/react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import PretzelList from "./PretzelList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function Widget() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box
      position="absolute"
      left="50px"
      top="100px"
      w={show ? "350px" : "350px"}
      h={show ? "500px" : "85px"}
      zIndex={1000}
      bg="white"
      p="5"
      borderWidth="2px"
      borderColor="gray.300"
      borderRadius="md"
      boxShadow="sm"
    >
      <Header handleToggle={handleToggle} show={show} />

      <Collapse in={show}>
        <Box w="350px">
          <Router>
            <NavBar />
            <Flex direction="column">
              <Routes>
                <Route path="/" element={<PretzelList />} />
              </Routes>
              <Routes>
                <Route path="/login" element={<LoginForm />} />
              </Routes>
              <Routes>
                <Route path="/register" element={<RegisterForm />} />
              </Routes>
            </Flex>
          </Router>
        </Box>
      </Collapse>
    </Box>
  );
}
