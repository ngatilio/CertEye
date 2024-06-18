import React from "react";
import ReactDOMClient from "react-dom/client";
import { CheckerPlaybooks } from "./screens/CheckerPlaybooks";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CheckerPlaybooks />);
