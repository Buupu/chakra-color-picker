import { Flex } from "@chakra-ui/react";
import React from "react";
import { ColorPicker } from "chakra-color-picker";

export const App = () => {
  const handleColorChange = (value) => {
    console.log(value);
  };

  return (
    <Flex w="full" h="100vh">
      <Flex flex={1} justify="center" align="center" background="blue.900">
        <ColorPicker onChange={handleColorChange} />
      </Flex>
    </Flex>
  );
};

export default App;
