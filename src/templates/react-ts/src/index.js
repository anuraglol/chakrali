"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("@chakra-ui/react");
const React = (0, tslib_1.__importStar)(require("react"));
const react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
const App_1 = require("./App");
const reportWebVitals_1 = (0, tslib_1.__importDefault)(require("./reportWebVitals"));
const serviceWorker = (0, tslib_1.__importStar)(require("./serviceWorker"));
react_dom_1.default.render(<React.StrictMode>
    <react_1.ColorModeScript />
    <App_1.App />
  </React.StrictMode>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
