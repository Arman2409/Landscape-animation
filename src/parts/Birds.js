"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flockDetails = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const birdVariants = {
    bodyVariants: {
        initial: {
            right: "2100px"
        },
        animate: {
            right: "-400px",
        }
    },
    wingVariants: {
        initial: {
            transform: "rotateX(0deg)"
        },
        animate: {
            transform: ["rotateX(0deg)", "rotateX(180deg)", "rotateX(0deg)"],
        }
    }
};
exports.flockDetails = [
    {
        top: 100,
        delay: 0.25
    },
    {
        top: 130,
        delay: 0.5
    },
    {
        top: 70,
        delay: 0.71
    }
];
const Bird = ({ top, delay }) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ variants: birdVariants.bodyVariants, initial: "initial", animate: "animate", transition: {
        delay,
        duration: 10,
        ease: "linear",
    }, className: "bird", style: {
        top: top + "px"
    } }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "bird_head" }), (0, jsx_runtime_1.jsx)("div", { className: "bird_body" }), (0, jsx_runtime_1.jsx)("div", { className: "bird_tail" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ variants: birdVariants.wingVariants, initial: "initial", animate: "animate", transition: {
                duration: Math.random() / 2 + 0.5,
                repeat: Infinity,
            }, className: "bird_wing bird_wing_1" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "bird_wing_zigzag bird_wing_zigzag_1" }), (0, jsx_runtime_1.jsx)("div", { className: "bird_wing_zigzag bird_wing_zigzag_2" }), (0, jsx_runtime_1.jsx)("div", { className: "bird_wing_zigzag bird_wing_zigzag_3" })] }))] })));
exports.default = ({ delay }) => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [exports.flockDetails.map(({ delay: relationalDelay, top }, index) => (0, jsx_runtime_1.jsx)(Bird, { delay: delay + relationalDelay, top: top }, index)), " "] });
