import React from "react";
import ReactDOMClient from "react-dom/client";
import { NewPoliciesAnd } from "./screens/NewPoliciesAnd";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NewPoliciesAnd />);
