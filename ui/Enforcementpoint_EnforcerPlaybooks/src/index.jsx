import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementChecker } from "./screens/EnforcementChecker";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementChecker />);
