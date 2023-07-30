"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const Rain = ({ delay, duration, height = 500, width = 100 }) => {
    const rainMainRef = (0, react_1.useRef)(null);
    const intervalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            const interval = 150;
            const durationMs = duration * 1000;
            let durationGone = 0;
            intervalRef.current = setInterval(() => {
                durationGone += interval;
                if (durationGone >= durationMs) {
                    clearInterval(intervalRef.current);
                    return;
                }
                const dropsQuantity = Math.round(Math.random() * 3);
                const dropsLeftArray = [];
                for (let i = 0; i <= dropsQuantity; i++)
                    dropsLeftArray.push(Math.random() * width + "px");
                dropsLeftArray.map((left) => {
                    const drop = document.createElement("div");
                    drop.setAttribute("class", "drop");
                    drop.style.left = left;
                    if (rainMainRef.current) {
                        rainMainRef.current.appendChild(drop);
                    }
                    (0, framer_motion_1.animate)(drop, {
                        top: "500px"
                    }, { duration: 5 });
                });
            }, interval);
        }, delay);
    }, [rainMainRef.current]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: rainMainRef, className: "rain" }));
};
exports.default = Rain;
