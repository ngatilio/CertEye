import React from "react";
import ReactDOMClient from "react-dom/client";
import { SelectPlan } from "./screens/SelectPlan";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SelectPlan />);
