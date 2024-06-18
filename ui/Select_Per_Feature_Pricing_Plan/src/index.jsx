import React from "react";
import ReactDOMClient from "react-dom/client";
import { ZerotrustPlan } from "./screens/ZerotrustPlan";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ZerotrustPlan />);
