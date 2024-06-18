import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddEthicalTwin } from "./screens/AddEthicalTwin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddEthicalTwin />);
