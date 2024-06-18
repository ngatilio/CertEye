import React from "react";
import ReactDOMClient from "react-dom/client";
import { ZerotrustCancel } from "./screens/ZerotrustCancel";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ZerotrustCancel />);
