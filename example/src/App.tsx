import { Flex, ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { ColorPicker } from "../../";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="full" h="100vh">
        <Flex flex={1} justify="center" align="center" background="blue.900">
          <ColorPicker onChange={(color) => console.log(color)} defaultColor="orange.500" />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
