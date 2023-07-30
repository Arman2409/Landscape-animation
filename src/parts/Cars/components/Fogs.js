"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const getRandomNumberWithPixels = (number, range) => number - range + Math.random() * number + "px";
const getFogVariants = () => ({
    initial: {
        width: "15px",
        height: "15px",
        borderRadius: "10px 15px 0px 20px"
    },
    animate: {
        width: ["15px", getRandomNumberWithPixels(15, 10), getRandomNumberWithPixels(15, 10)],
        height: ["15px", getRandomNumberWithPixels(15, 10), getRandomNumberWithPixels(15, 10)],
        borderRadius: ["10px 15px 0px 20px", `${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)}`,
            `${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)} ${getRandomNumberWithPixels(15, 10)}`],
        transition: {
            duration: 1,
            repeat: Infinity
        }
    }
});
const Fogs = ({ zIndex }) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "fogs" }, { children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { variants: getFogVariants(), className: "fog fog_1", style: {
                zIndex
            } }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { variants: getFogVariants(), className: "fog fog_2", style: {
                zIndex
            } }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { variants: getFogVariants(), className: "fog fog_3", style: {
                zIndex
            } })] })));
exports.default = Fogs;
