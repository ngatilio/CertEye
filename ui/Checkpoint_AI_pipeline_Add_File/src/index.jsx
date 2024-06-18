import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementAdd } from "./screens/EnforcementAdd";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementAdd />);
