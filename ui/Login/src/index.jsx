import React from "react";
import ReactDOMClient from "react-dom/client";
import { Login } from "./screens/Login";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Login />);
