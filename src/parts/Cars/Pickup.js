"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const Fogs_1 = __importDefault(require("./components/Fogs"));
const pickupVariants = {
    wheelVariants: {
        initial: {
            transform: "rotate(15deg)"
        },
        animate: {
            transform: "rotate(360deg)",
            transition: {
                ease: "linear",
                duration: 0.5,
                repeat: Infinity
            }
        }
    },
    bodyVariants: {
        initial: {
            left: "0px"
        },
        animate: {
            left: "2500px",
        }
    }
};
const Pickup = ({ delay }) => {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ variants: pickupVariants.bodyVariants, initial: "initial", animate: "animate", className: "pickup", transition: {
            ease: "linear",
            duration: 25,
            delay
        } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pickup_base" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "pickup_cabin" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ variants: pickupVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_forward" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_1" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_2" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_3" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_4" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_5" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_6" })] })), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ variants: pickupVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_backward" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_1" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_2" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_3" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_4" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_5" }), (0, jsx_runtime_1.jsx)("div", { className: "wheel_rect wheel_rect_6" })] })), (0, jsx_runtime_1.jsx)("div", { className: "pipe" }), (0, jsx_runtime_1.jsx)(Fogs_1.default, { zIndex: 5 })] })) })));
};
exports.default = Pickup;
