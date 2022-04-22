"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
function MyApp({ Component, pageProps }) {
    return (<>
      <react_1.ChakraProvider>
        <Component {...pageProps}/>
      </react_1.ChakraProvider>
    </>);
}
exports.default = MyApp;
