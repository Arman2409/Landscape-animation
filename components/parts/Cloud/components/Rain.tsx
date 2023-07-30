import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

const Rain = ({ delay, duration, height = 500, width = 100 }: {
    delay: number,
    duration: number,
    height?: number,
    width?: number
}) => {

    const rainMainRef = useRef<any>(null);
    const intervalRef = useRef<any>(null);

    useEffect(() => { 
        setTimeout(() => {
            const interval = 150;
            const durationMs = duration * 1000;
            let durationGone = 0;
            intervalRef.current = setInterval(() => {
                durationGone += interval;
                if(durationGone >= durationMs) {
                    clearInterval(intervalRef.current);
                    return;
                }
                const dropsQuantity = Math.round(Math.random() * 3);
                const dropsLeftArray:any = [];
                for(let i = 0; i <= dropsQuantity; i++) dropsLeftArray.push(Math.random() * width + "px");
                 dropsLeftArray.map((left:string) => {
                    const drop = document.createElement("div");
                    drop.setAttribute("class", "drop");
                    drop.style.left = left;
                    if (rainMainRef.current) {
                        rainMainRef.current.appendChild(drop);
                    }
                    animate(drop, {
                        top: "500px"
                    }, {duration: 5})
                 })
             }, interval);
        }, delay);
    }, [rainMainRef.current]);

    return (
        <div
            ref={rainMainRef}
            className="rain">
        </div>)
}

export default Rain;