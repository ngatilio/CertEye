import React from "react";
import ReactDOMClient from "react-dom/client";
import { NrsDatabaseMembers } from "./screens/NrsDatabaseMembers";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NrsDatabaseMembers />);
