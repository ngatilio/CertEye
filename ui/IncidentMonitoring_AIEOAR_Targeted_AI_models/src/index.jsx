import React from "react";
import ReactDOMClient from "react-dom/client";
import { AiTargetModels } from "./screens/AiTargetModels";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AiTargetModels />);
