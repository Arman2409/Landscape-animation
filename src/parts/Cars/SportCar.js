import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Fogs from "./components/Fogs";
const sportcarVariants = {
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
            left: "0px",
            top: "0px"
        },
        animate: {
            left: "2500px",
            top: ["0px", "-50px", "0px"],
        }
    }
};
const SportCar = ({ delay }) => {
    return (_jsx(motion.div, { variants: sportcarVariants.bodyVariants, initial: "initial", animate: "animate", className: "sportcar", transition: {
            duration: 15,
            delay,
            ease: "linear",
            top: {
                delay: delay + 2,
                duration: 5,
            }
        }, children: _jsxs("div", { className: "sportcar_base", children: [_jsx("div", { className: "sportcar_cabin" }), _jsxs(motion.div, { variants: sportcarVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_forward", children: [_jsx("div", { className: "wheel_rect wheel_rect_1" }), _jsx("div", { className: "wheel_rect wheel_rect_2" }), _jsx("div", { className: "wheel_rect wheel_rect_3" }), _jsx("div", { className: "wheel_rect wheel_rect_4" }), _jsx("div", { className: "wheel_rect wheel_rect_5" }), _jsx("div", { className: "wheel_rect wheel_rect_6" })] }), _jsxs(motion.div, { variants: sportcarVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_backward", children: [_jsx("div", { className: "wheel_rect wheel_rect_1" }), _jsx("div", { className: "wheel_rect wheel_rect_2" }), _jsx("div", { className: "wheel_rect wheel_rect_3" }), _jsx("div", { className: "wheel_rect wheel_rect_4" }), _jsx("div", { className: "wheel_rect wheel_rect_5" }), _jsx("div", { className: "wheel_rect wheel_rect_6" })] }), _jsx("div", { className: "pipe" }), _jsx(Fogs, { zIndex: 4 })] }) }));
};
export default SportCar;
