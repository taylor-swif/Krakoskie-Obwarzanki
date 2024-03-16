import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      as="form"
      // onSubmit={handleSubmit}
      p="4"
      borderWidth="2px"
      borderRadius="md"
    >
      <FormControl id="username" isRequired>
        <FormLabel>Nazwa użytkownika</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired mt="4">
        <FormLabel>Hasło</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt="4">
        Zaloguj się
      </Button>
    </Box>
  );
}
