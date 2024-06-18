import React from "react";
import ReactDOMClient from "react-dom/client";
import { ResetPassword } from "./screens/ResetPassword";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ResetPassword />);
