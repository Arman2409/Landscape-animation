import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
export const flockDetails = [
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
const Bird = ({ top, delay }) => (_jsxs(motion.div, { variants: birdVariants.bodyVariants, initial: "initial", animate: "animate", transition: {
        delay,
        duration: 10,
        ease: "linear",
    }, className: "bird", style: {
        top: top + "px"
    }, children: [_jsx("div", { className: "bird_head" }), _jsx("div", { className: "bird_body" }), _jsx("div", { className: "bird_tail" }), _jsxs(motion.div, { variants: birdVariants.wingVariants, initial: "initial", animate: "animate", transition: {
                duration: Math.random() / 2 + 0.5,
                repeat: Infinity,
            }, className: "bird_wing bird_wing_1", children: [_jsx("div", { className: "bird_wing_zigzag bird_wing_zigzag_1" }), _jsx("div", { className: "bird_wing_zigzag bird_wing_zigzag_2" }), _jsx("div", { className: "bird_wing_zigzag bird_wing_zigzag_3" })] })] }));
export default ({ delay }) => _jsxs(_Fragment, { children: [flockDetails.map(({ delay: relationalDelay, top }, index) => _jsx(Bird, { delay: delay + relationalDelay, top: top }, index)), " "] });
