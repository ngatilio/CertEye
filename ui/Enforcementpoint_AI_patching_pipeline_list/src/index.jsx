import React from "react";
import ReactDOMClient from "react-dom/client";
import { EnforcementAi } from "./screens/EnforcementAi";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EnforcementAi />);
