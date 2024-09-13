import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import Pgpri from "./pgpri";
import Menu from "./menu";

const rootElement = document.getElementById('root');

const elment = document.getElementById('uncontrolled-tab-example')?;
const roots = ReactDOM.createRoot(elment);
roots.render(<Menu />);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Pgpri />
      </BrowserRouter>
    </React.StrictMode>
  );
}
