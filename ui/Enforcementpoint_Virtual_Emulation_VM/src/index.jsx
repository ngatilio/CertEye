import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementVeTest } from "./screens/EnforcementVeTest";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementVeTest />);
