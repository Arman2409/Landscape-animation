import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
const Rain = ({ delay, duration, height = 500, width = 100 }) => {
    const rainMainRef = useRef(null);
    const intervalRef = useRef(null);
    useEffect(() => {
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
                    animate(drop, {
                        top: "500px"
                    }, { duration: 5 });
                });
            }, interval);
        }, delay);
    }, [rainMainRef.current]);
    return (_jsx("div", { ref: rainMainRef, className: "rain" }));
};
export default Rain;
