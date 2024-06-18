import React from "react";
import ReactDOMClient from "react-dom/client";
import { ZerotrustUpgrade } from "./screens/ZerotrustUpgrade";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ZerotrustUpgrade />);
