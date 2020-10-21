import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { isData } from "./store";
import App from "./App";

render(
  <RecoilRoot initializeState={initializeState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("root")
);

function initializeState({ set }) {
  // mencari data key persistent state di localStorage
  const values = localStorage.getItem(isData.key);

  if (values) {
    return set(isData, JSON.parse(values).isLogin);
  }
}
