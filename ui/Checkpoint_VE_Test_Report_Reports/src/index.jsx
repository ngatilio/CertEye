import React from "react";
import ReactDOMClient from "react-dom/client";
import { VeTestReport } from "./screens/VeTestReport";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<VeTestReport />);
