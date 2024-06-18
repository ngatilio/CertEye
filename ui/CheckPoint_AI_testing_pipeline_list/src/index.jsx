import React from "react";
import ReactDOMClient from "react-dom/client";
import { AiEthicsConfim } from "./screens/AiEthicsConfim";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AiEthicsConfim />);
