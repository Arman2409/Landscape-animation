import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Birds from "./parts/Birds";
import Sun from "./parts/Sun";
import Mountains from "./parts/Mountains";
import Pickup from "./parts/Cars/Pickup";
import SportCar from "./parts/Cars/SportCar";
import Cloud from "./parts/Cloud/Cloud";
const Animation = () => (_jsxs(motion.div, { className: "main_cont", initial: {
        backgroundColor: "rgba(0, 0, 0)"
    }, animate: {
        backgroundColor: "rgb(135, 206, 235)",
        transition: {
            duration: 6,
            delay: 1,
        }
    }, children: [_jsx(Sun, { duration: 4 }), _jsx(Cloud, { direction: "right", top: 100, delay: 5, duration: 150, rainOptions: {
                duration: 16,
                when: 300,
                delay: 1
            } }), _jsx(Cloud, { direction: "left", top: 190, delay: 15, duration: 180 }), _jsx(Birds, { delay: 5 }), _jsx(Mountains, {}), _jsx("div", { className: "land", children: _jsxs("div", { className: "road", children: [_jsx("div", { className: "road_line" }), _jsx(Pickup, { delay: 12 }), _jsx(SportCar, { delay: 15 })] }) })] }));
export default Animation;
