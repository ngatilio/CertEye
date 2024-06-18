import React from "react";
import ReactDOMClient from "react-dom/client";
import { Autopatching } from "./screens/Autopatching";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Autopatching />);
