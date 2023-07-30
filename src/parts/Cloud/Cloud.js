import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Rain from "./components/Rain";
const getCloudVariants = (delay, direction, duration) => {
    let initialOptions = {};
    let animateOptions = {};
    if (direction === "right") {
        initialOptions = {
            left: "-200px",
        };
    }
    else {
        initialOptions = {
            right: "-100px"
        };
    }
    if (direction === "right") {
        animateOptions = {
            left: "2500px",
            transition: {
                duration,
                delay
            }
        };
    }
    else {
        animateOptions = {
            right: "2500px",
            transition: {
                delay,
                duration
            }
        };
    }
    return {
        initial: initialOptions,
        animate: animateOptions,
    };
};
const Cloud = ({ direction, duration, top, delay, rainOptions }) => {
    const [showRain, setShowRain] = useState(false);
    const cloudRef = useRef(null);
    const cloudVariants = getCloudVariants(delay, direction, duration);
    useEffect(() => {
        if (rainOptions) {
            setInterval(() => {
                if (showRain) {
                    return;
                }
                const styles = cloudRef.current?.style?.cssText;
                const { duration: rainDuration, when, delay } = rainOptions;
                let wentStyles = "";
                if (direction === "left") {
                    wentStyles = styles.slice(styles.indexOf("right:"));
                }
                else {
                    wentStyles = styles.slice(styles.indexOf("left:"));
                }
                const wentPath = Number(wentStyles.match(/[+-]?\d+(\.\d+)?/g));
                if (wentPath >= when) {
                    setShowRain(true);
                }
            }, 500);
        }
    }, [cloudRef.current?.style?.cssText, setShowRain]);
    return (_jsxs(motion.div, { variants: cloudVariants, initial: "initial", animate: "animate", ref: cloudRef, className: "cloud_main", style: {
            top: top + "px"
        }, children: [_jsxs("div", { className: "cloud", children: [_jsx("div", { className: "cloud_part cloud_part_1" }), _jsx("div", { className: "cloud_part cloud_part_2" }), _jsx("div", { className: "cloud_part cloud_part_3" }), _jsx("div", { className: "cloud_part cloud_part_4" }), _jsx("div", { className: "cloud_part cloud_part_5" })] }), showRain &&
                _jsx(Rain, { delay: rainOptions.delay, duration: rainOptions.duration, width: 80, height: 700 })] }));
};
export default Cloud;
