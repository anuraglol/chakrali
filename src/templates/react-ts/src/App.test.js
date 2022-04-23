"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_2 = require("@testing-library/react");
const test_utils_1 = require("./test-utils");
const App_1 = require("./App");
test("renders learn react link", () => {
    (0, test_utils_1.render)(<App_1.App />);
    const linkElement = react_2.screen.getByText(/learn chakra/i);
    expect(linkElement).toBeInTheDocument();
});
