import React from "react";
import ReactDOMClient from "react-dom/client";
import { VirtualEmulation } from "./screens/VirtualEmulation";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<VirtualEmulation />);
