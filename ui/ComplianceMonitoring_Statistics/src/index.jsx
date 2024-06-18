import React from "react";
import ReactDOMClient from "react-dom/client";
import { Compliance } from "./screens/Compliance";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Compliance />);
