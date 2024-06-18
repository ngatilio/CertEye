import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementVe } from "./screens/EnforcementVe";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementVe />);
