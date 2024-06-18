import React from "react";
import ReactDOMClient from "react-dom/client";
import { NrsDatabaseView } from "./screens/NrsDatabaseView";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NrsDatabaseView />);
