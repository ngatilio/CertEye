import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddEthicsOps } from "./screens/AddEthicsOps";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddEthicsOps />);
