import React from "react";
import ReactDOMClient from "react-dom/client";
import { NrsDatabasePolicy } from "./screens/NrsDatabasePolicy";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NrsDatabasePolicy />);
