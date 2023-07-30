"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const Rain_1 = __importDefault(require("./components/Rain"));
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
    var _a, _b;
    const [showRain, setShowRain] = (0, react_1.useState)(false);
    const cloudRef = (0, react_1.useRef)(null);
    const cloudVariants = getCloudVariants(delay, direction, duration);
    (0, react_1.useEffect)(() => {
        if (rainOptions) {
            setInterval(() => {
                var _a, _b;
                if (showRain) {
                    return;
                }
                const styles = (_b = (_a = cloudRef.current) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.cssText;
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
    }, [(_b = (_a = cloudRef.current) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.cssText, setShowRain]);
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ variants: cloudVariants, initial: "initial", animate: "animate", ref: cloudRef, className: "cloud_main", style: {
            top: top + "px"
        } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "cloud" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "cloud_part cloud_part_1" }), (0, jsx_runtime_1.jsx)("div", { className: "cloud_part cloud_part_2" }), (0, jsx_runtime_1.jsx)("div", { className: "cloud_part cloud_part_3" }), (0, jsx_runtime_1.jsx)("div", { className: "cloud_part cloud_part_4" }), (0, jsx_runtime_1.jsx)("div", { className: "cloud_part cloud_part_5" })] })), showRain &&
                (0, jsx_runtime_1.jsx)(Rain_1.default, { delay: rainOptions.delay, duration: rainOptions.duration, width: 80, height: 700 })] })));
};
exports.default = Cloud;
