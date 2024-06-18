import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementVeTestReport } from "./screens/ElementVeTestReport";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementVeTestReport />);
