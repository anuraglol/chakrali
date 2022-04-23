"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_1 = require("@chakra-ui/react");
const logo_svg_1 = (0, tslib_1.__importDefault)(require("./logo.svg"));
const spin = (0, react_1.keyframes) `
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
exports.Logo = (0, react_1.forwardRef)((props, ref) => {
    const prefersReducedMotion = (0, react_1.usePrefersReducedMotion)();
    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 20s linear`;
    return <react_1.chakra.img animation={animation} src={logo_svg_1.default} ref={ref} {...props}/>;
});
