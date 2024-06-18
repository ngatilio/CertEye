import React from "react";
import ReactDOMClient from "react-dom/client";
import { AiEoar } from "./screens/AiEoar";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AiEoar />);
