# chakra-color-picker

Color Picker Component Package for Chakra UI

## Codesandbox Link [Here](https://githubbox.com/Buupu/chakra-color-picker/tree/main/demo)

## NPM Link [Here](https://www.npmjs.com/package/chakra-color-picker)

## Install

```bash
npm i chakra-color-picker
```

## Usage

### Basic Usage

```js
import { Flex, FormControl, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { ColorPicker } from "chakra-color-picker";

export default function App() {
  const handleColorChange = (value) => {
    console.log(value);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex pt="48" justify="center" align="center" w="full">
        <ColorPicker onChange={handleColorChange} />
      </Flex>
    </ChakraProvider>
  );
}
```

## API

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td>true</td>
    <td>-</td>
    <td>Returns color value as a string to the function provided.</td>
  </tr>
  <tr>
    <td>colors</td>
    <td>string[]</td>
    <td>false</td>
    <td>
        [
            "gray.500",
            "red.500",
            "orange.500",
            "yellow.500",
            "green.500",
            "teal.500",
            "blue.500",
            "cyan.500",
            "purple.500",
            "pink.500",
        ]
    </td>
    <td>Accepts an array of color values that will override the default values.</td>
  </tr>
  <tr>
    <td>bg</td>
    <td>string</td>
    <td>false</td>
    <td>
        "white"
    </td>
    <td>Changes the background color of the PopoverContent.</td>
  </tr>
  <tr>
    <td>placement</td>
    <td>"top" | "right" | "bottom" | "left" | "auto" | "end" | "start" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | ... 6 more ...</td>
    <td>false</td>
    <td>
        "bottom"
    </td>
    <td>The placement of the popper relative to its reference.</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>If true, sets the color picker to be disabled.</td>
  </tr>
</table>

## Running project

- Clone this repository

```sh
git clone https://github.com/Buupu/chakra-color-picker.git
```

- Install all dependencies

```sh
npm i
```

- Install package example dependencies

```sh
cd example
npm i
```

- Start the package server, and the example server

```sh
# root directory
npm start

# example directory
npm run dev
```
