import React from "react";
import ReactDOMClient from "react-dom/client";
import { NrsDatabaseAudit } from "./screens/NrsDatabaseAudit";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NrsDatabaseAudit />);
