import React from "react";
import ReactDOMClient from "react-dom/client";
import { TrustObservability } from "./screens/TrustObservability";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TrustObservability />);
