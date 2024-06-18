import React from "react";
import ReactDOMClient from "react-dom/client";
import { SignupPassword } from "./screens/SignupPassword";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SignupPassword />);
