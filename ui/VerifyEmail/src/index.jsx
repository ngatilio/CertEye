import React from "react";
import ReactDOMClient from "react-dom/client";
import { SignupVerification } from "./screens/SignupVerification";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SignupVerification />);
