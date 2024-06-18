import React from "react";
import ReactDOMClient from "react-dom/client";
import { EstimatedReadiness } from "./screens/EstimatedReadiness";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EstimatedReadiness />);
