import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementEthical } from "./screens/EnforcementEthical";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementEthical />);
