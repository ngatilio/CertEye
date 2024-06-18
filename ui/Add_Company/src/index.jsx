import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddCompany } from "./screens/AddCompany";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddCompany />);
