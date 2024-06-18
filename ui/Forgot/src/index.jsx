import React from "react";
import ReactDOMClient from "react-dom/client";
import { ForgotPassword } from "./screens/ForgotPassword";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ForgotPassword />);
