"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_1 = require("@chakra-ui/react");
const ColorModeSwitcher_1 = require("./ColorModeSwitcher");
const Logo_1 = require("./Logo");
const App = () => (<react_1.ChakraProvider theme={react_1.theme}>
    <react_1.Box textAlign="center" fontSize="xl">
      <react_1.Grid minH="100vh" p={3}>
        <ColorModeSwitcher_1.ColorModeSwitcher justifySelf="flex-end"/>
        <react_1.VStack spacing={8}>
          <Logo_1.Logo h="40vmin" pointerEvents="none"/>
          <react_1.Text>
            Edit <react_1.Code fontSize="xl">src/App.tsx</react_1.Code> and save to reload.
          </react_1.Text>
          <react_1.Link color="teal.500" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
            Learn Chakra
          </react_1.Link>
        </react_1.VStack>
      </react_1.Grid>
    </react_1.Box>
  </react_1.ChakraProvider>);
exports.App = App;
