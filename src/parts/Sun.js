"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const sunVariants = {
    initial: {
        bottom: "0px",
        boxShadow: "0px 0px 24px 15px rgba(178, 140, 0, 0.3)",
    },
    animate: {
        top: "0px",
        boxShadow: ["0px 0px 24px 0px rgba(178, 140, 0, 0.3)", "0px 0px 24px 15px rgba(178, 140, 0, 0.3)"],
    }
};
const Sun = ({ duration }) => {
    const getGlimmers = (quantity) => {
        const glimmers = [];
        for (let i = 0; i < quantity; i++) {
            const itemVariants = {
                initial: {
                    transform: "scale(1)",
                },
                animate: {
                    transform: "scale(40)",
                    opacity: [1, 0.7, 0.4, 0],
                    visibility: "visible",
                    transition: {
                        delay: i / 4 + 2,
                        duration: 15,
                    },
                    transitionEnd: { display: "none" }
                }
            };
            glimmers.push((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "glimmer", variants: itemVariants, initial: "initial", animate: "animate" }));
        }
        return glimmers;
    };
    const glimmers = getGlimmers(10);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ className: "sun", initial: "initial", animate: "animate", variants: sunVariants, transition: {
            duration,
            delay: 1,
            boxShadow: {
                repeat: Infinity,
                duration: 10
            }
        } }, { children: glimmers })));
};
exports.default = Sun;
