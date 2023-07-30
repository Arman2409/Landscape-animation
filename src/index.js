"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const Animation_1 = __importDefault(require("./Animation"));
require("./styles/main.scss");
const App = () => {
    return (0, jsx_runtime_1.jsx)(Animation_1.default, {});
};
const domNode = document.getElementById('root');
const root = (0, client_1.createRoot)(domNode);
root.render((0, jsx_runtime_1.jsx)(App, {}));
