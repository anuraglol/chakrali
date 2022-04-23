"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModeSwitcher = void 0;
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_1 = require("@chakra-ui/react");
const fa_1 = require("react-icons/fa");
const ColorModeSwitcher = (props) => {
    const { toggleColorMode } = (0, react_1.useColorMode)();
    const text = (0, react_1.useColorModeValue)("dark", "light");
    const SwitchIcon = (0, react_1.useColorModeValue)(fa_1.FaMoon, fa_1.FaSun);
    return (<react_1.IconButton size="md" fontSize="lg" variant="ghost" color="current" marginLeft="2" onClick={toggleColorMode} icon={<SwitchIcon />} aria-label={`Switch to ${text} mode`} {...props}/>);
};
exports.ColorModeSwitcher = ColorModeSwitcher;
