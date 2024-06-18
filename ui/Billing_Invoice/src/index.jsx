import React from "react";
import ReactDOMClient from "react-dom/client";
import { Invoice } from "./screens/Invoice";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Invoice />);
