import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Animation from "./Animation";
import "./styles/main.scss";
const App = () => {
    return _jsx(Animation, {});
};
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(_jsx(App, {}));
