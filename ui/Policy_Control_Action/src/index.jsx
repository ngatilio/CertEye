import React from "react";
import ReactDOMClient from "react-dom/client";
import { Dropdown } from "./screens/Dropdown";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Dropdown />);
