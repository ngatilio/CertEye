import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddedCompany } from "./screens/AddedCompany";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddedCompany />);
