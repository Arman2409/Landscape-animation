import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Fogs from "./components/Fogs";
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
    return (_jsx(motion.div, { variants: pickupVariants.bodyVariants, initial: "initial", animate: "animate", className: "pickup", transition: {
            ease: "linear",
            duration: 25,
            delay
        }, children: _jsxs("div", { className: "pickup_base", children: [_jsx("div", { className: "pickup_cabin" }), _jsxs(motion.div, { variants: pickupVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_forward", children: [_jsx("div", { className: "wheel_rect wheel_rect_1" }), _jsx("div", { className: "wheel_rect wheel_rect_2" }), _jsx("div", { className: "wheel_rect wheel_rect_3" }), _jsx("div", { className: "wheel_rect wheel_rect_4" }), _jsx("div", { className: "wheel_rect wheel_rect_5" }), _jsx("div", { className: "wheel_rect wheel_rect_6" })] }), _jsxs(motion.div, { variants: pickupVariants.wheelVariants, initial: "initial", animate: "animate", className: "wheel wheel_backward", children: [_jsx("div", { className: "wheel_rect wheel_rect_1" }), _jsx("div", { className: "wheel_rect wheel_rect_2" }), _jsx("div", { className: "wheel_rect wheel_rect_3" }), _jsx("div", { className: "wheel_rect wheel_rect_4" }), _jsx("div", { className: "wheel_rect wheel_rect_5" }), _jsx("div", { className: "wheel_rect wheel_rect_6" })] }), _jsx("div", { className: "pipe" }), _jsx(Fogs, { zIndex: 5 })] }) }));
};
export default Pickup;
