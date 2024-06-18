import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddNrs } from "./screens/AddNrs";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddNrs />);
