"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const Birds_1 = __importDefault(require("./parts/Birds"));
const Sun_1 = __importDefault(require("./parts/Sun"));
const Mountains_1 = __importDefault(require("./parts/Mountains"));
const Pickup_1 = __importDefault(require("./parts/Cars/Pickup"));
const SportCar_1 = __importDefault(require("./parts/Cars/SportCar"));
const Cloud_1 = __importDefault(require("./parts/Cloud/Cloud"));
const Animation = () => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ className: "main_cont", initial: {
        backgroundColor: "rgba(0, 0, 0)"
    }, animate: {
        backgroundColor: "rgb(135, 206, 235)",
        transition: {
            duration: 6,
            delay: 1,
        }
    } }, { children: [(0, jsx_runtime_1.jsx)(Sun_1.default, { duration: 4 }), (0, jsx_runtime_1.jsx)(Cloud_1.default, { direction: "right", top: 100, delay: 0, duration: 150, rainOptions: {
                duration: 16,
                when: 300,
                delay: 1
            } }), (0, jsx_runtime_1.jsx)(Cloud_1.default, { direction: "left", top: 190, delay: 0, duration: 180 }), (0, jsx_runtime_1.jsx)(Birds_1.default, { delay: 5 }), (0, jsx_runtime_1.jsx)(Mountains_1.default, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "land" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "road" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "road_line" }), (0, jsx_runtime_1.jsx)(Pickup_1.default, { delay: 12 }), (0, jsx_runtime_1.jsx)(SportCar_1.default, { delay: 15 })] })) }))] })));
exports.default = Animation;
