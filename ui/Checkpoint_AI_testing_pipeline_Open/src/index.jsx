import React from "react";
import ReactDOMClient from "react-dom/client";
import { ConfigYaml } from "./screens/ConfigYaml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ConfigYaml />);
