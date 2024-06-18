import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementAiEthicsDrift } from "./screens/ElementAiEthicsDrift";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementAiEthicsDrift />);
