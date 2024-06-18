import React from "react";
import ReactDOMClient from "react-dom/client";
import { EthicalTwins } from "./screens/EthicalTwins";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EthicalTwins />);
