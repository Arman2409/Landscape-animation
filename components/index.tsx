import { createRoot } from "react-dom/client";

import Animation from "./Animation";

import "./styles/main.scss";

const App = () => {
    return <Animation />;
}

const domNode = document.getElementById('root');
const root = createRoot(domNode as any);
root.render(<App />);