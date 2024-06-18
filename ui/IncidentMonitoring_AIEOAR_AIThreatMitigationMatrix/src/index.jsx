import React from "react";
import ReactDOMClient from "react-dom/client";
import { ThreatMitigation } from "./screens/ThreatMitigation";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ThreatMitigation />);
