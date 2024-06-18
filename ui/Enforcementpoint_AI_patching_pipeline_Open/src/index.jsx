import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementConfig } from "./screens/EnforcementConfig";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementConfig />);
