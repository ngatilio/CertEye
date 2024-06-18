import React from "react";
import ReactDOMClient from "react-dom/client";
import { ComplianceRisk } from "./screens/ComplianceRisk";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ComplianceRisk />);
