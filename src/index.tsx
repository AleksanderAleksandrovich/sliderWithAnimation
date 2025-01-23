import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { StrictMode } from "react";
import { MainWrapper } from "app/wrappers/MainWrapper";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <MainWrapper>
      <App />
    </MainWrapper>
  </StrictMode>
);
