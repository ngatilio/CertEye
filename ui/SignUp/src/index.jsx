import React from "react";
import ReactDOMClient from "react-dom/client";
import { SignUp } from "./screens/SignUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SignUp />);
