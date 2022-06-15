import React from "react";
import "./App.css";
import { FormInput } from "./components/form-input.js";
import { FormCheckbox } from "./components/form-checkbox";
import { ChakraProvider, Container, Text, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="800px" p="6">
        <Box maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            p="6"
            display="flex"
            flexDirection="column"
          >
            <Text align="center" fontSize="4xl" m="3">
              TODOLIST
            </Text>
            <FormInput />
            <Box className="todolist">
              <FormCheckbox />
            </Box>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
