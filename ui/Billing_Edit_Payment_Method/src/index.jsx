import React from "react";
import ReactDOMClient from "react-dom/client";
import { ZerotrustEdit } from "./screens/ZerotrustEdit";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ZerotrustEdit />);
