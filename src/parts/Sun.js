import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
            glimmers.push(_jsx(motion.div, { className: "glimmer", variants: itemVariants, initial: "initial", animate: "animate" }));
        }
        return glimmers;
    };
    const glimmers = getGlimmers(10);
    return (_jsx(motion.div, { className: "sun", initial: "initial", animate: "animate", variants: sunVariants, transition: {
            duration,
            delay: 1,
            boxShadow: {
                repeat: Infinity,
                duration: 10
            }
        }, children: glimmers }));
};
export default Sun;
